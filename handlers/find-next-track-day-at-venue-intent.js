'use strict';

const webScraper = require('@trackdays-web-scraper/trackdays-co-uk');

const getNextEvent = require('../lib/get-next-event');
const TRACKS = require('../lib/tracks');

const vehicleTypeSlot = 'VEHICLE_TYPE';
const trackNameSlot = 'TRACK_NAME';

module.exports = function() {
    console.log('Handler: FindNextTrackDayAtVenueIntent');

    const intent = this.event.request.intent;
    const vehicleType = getMatchedVehicleTypeId(intent);
    const trackName = getMatchedTrackNameId(intent);
    const hasSpecifiedVehicleType = Boolean(vehicleType);
    const hasSpecifiedTrackName = Boolean(trackName);

    if (!hasSpecifiedVehicleType) {
        const speech =
            'Would you like me to check for car or motorbike track days?';
        const repromptSpeech = speech;
        const updatedIntent = intent;

        return this.emit(
            ':elicitSlot',
            vehicleTypeSlot,
            speech,
            repromptSpeech,
            updatedIntent
        );
    }

    if (!hasSpecifiedTrackName) {
        const speech = 'Which track would you like me to check?';
        const repromptSpeech = speech;
        const updatedIntent = intent;

        return this.emit(
            ':elicitSlot',
            trackNameSlot,
            speech,
            repromptSpeech,
            updatedIntent
        );
    }

    console.log('FindNextTrackDayAtVenueIntent', vehicleType, trackName);

    const track = TRACKS[trackName.id];

    switch (vehicleType.id) {
        case 'CAR':
            getNextCarTrackDayAtVenue(track.searchName)
                .then(event => {
                    if (!event) {
                        return this.emit(
                            ':tell',
                            `There doesn't seem to be any upcoming events at ${track.speechOutput}.`
                        );
                    }

                    return this.emit(':tell', getSpeechForEvent(event, track));
                })
                .catch(error => {
                    console.error(
                        'FindNextTrackDayAtVenueIntent',
                        'Failed fetching car events',
                        error
                    );

                    return this.emit(
                        ':tell',
                        `Sorry, I was unable to check for events at this time. Please try again later.`
                    );
                });
            break;

        case 'MOTORBIKE':
            getNextBikeTrackDayAtVenue(track.searchName)
                .then(event => {
                    if (!event) {
                        return this.emit(
                            ':tell',
                            `There doesn't seem to be any upcoming events at ${track.speechOutput}.`
                        );
                    }

                    return this.emit(':tell', getSpeechForEvent(event, track));
                })
                .catch(error => {
                    console.error(
                        'FindNextTrackDayAtVenueIntent',
                        'Failed fetching bike events',
                        error
                    );

                    return this.emit(
                        ':tell',
                        `Sorry, I was unable to check for events at this time. Please try again later.`
                    );
                });
            break;

        default:
            console.error('Unknown vehicle type', vehicleType);

            return this.emit(
                ':tell',
                `I'm unable to find track day information for that vehicle type.`
            );
    }
};

function getNextCarTrackDayAtVenue(venue) {
    return webScraper.getCarEventSummariesAtVenue(venue).then(events => {
        console.log(`Found ${events.length} car events at ${venue}`);

        return getNextEvent(events);
    });
}

function getNextBikeTrackDayAtVenue(venue) {
    return webScraper.getBikeEventSummariesAtVenue(venue).then(events => {
        console.log(`Found ${events.length} bike events at ${venue}`);

        return getNextEvent(events);
    });
}

function getSpeechForEvent(event, track) {
    const vehicleType = event.vehicleType.toLowerCase();
    const price = `${event.pricing.priceCurrencySymbol}${event.pricing.price}`;
    const eventType = getTrackDayFormatSpeech(event);

    // Convert date to YYYYMMDD format as that's better handled by Alexa
    const date = event.eventDate.replace(/\-/g, '');

    return (
        `<p>The next ${vehicleType} track day at ${track.speechOutput} is on ` +
        `<say-as interpret-as="date">${date}</say-as>, and will be run in "${eventType}" format.</p>` +
        getTrackLayoutSpeech(event) +
        `<p>The track day costs ${price} per entry.</p>`
    );
}

function getTrackLayoutSpeech(event) {
    if (!event.track.layout) {
        return '';
    }

    return `<p>It will run on the "${event.track.layout}" layout</p>`;
}

function getTrackDayFormatSpeech(event) {
    if (!event.format) {
        return '';
    }

    let format = event.format.toLowerCase();

    // Replace the "per hour" abbreviation (p/h) with full text
    format = format.replace(/p\/h/g, 'per hour');

    return format;
}

function getMatchedVehicleTypeId(intent) {
    return resolveSlotBestMatch(intent, vehicleTypeSlot);
}

function getMatchedTrackNameId(intent) {
    return resolveSlotBestMatch(intent, trackNameSlot);
}

function resolveSlotBestMatch(intent, slotName) {
    const slot = intent.slots[slotName];

    try {
        const resolutionAuthority = slot.resolutions.resolutionsPerAuthority[0];
        const bestMatch = resolutionAuthority.values[0].value;

        return bestMatch;
    } catch (error) {
        console.warn(
            `Could not resolve slot "${slotName}"`,
            JSON.stringify(slot),
            JSON.stringify(intent)
        );
        return null;
    }
}
