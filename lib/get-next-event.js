'use strict';

const webScraper = require('@trackdays-web-scraper/trackdays-co-uk');

exports.findNextCarTrackDayAtVenue = function(venue) {
    console.log(`Checking for events at ${venue}`);

    return webScraper.getCarEventSummariesAtVenue(venue).then(events => {
        console.log(`Found ${events.length} car events at ${venue}`);

        const sortedEvents = sortEventsByDate(events);
        const nextEvent = sortedEvents[0];

        if (!nextEvent) {
            return null;
        }

        return nextEvent;
    });
};

exports.findNextBikeTrackDayAtVenue = function(venue) {
    console.log(`Checking for events at ${venue}`);

    return webScraper.getBikeEventSummariesAtVenue(venue).then(events => {
        console.log(`Found ${events.length} bike events at ${venue}`);

        const sortedEvents = sortEventsByDate(events);
        const nextEvent = sortedEvents[0];

        if (!nextEvent) {
            return null;
        }

        return nextEvent;
    });
};

module.exports = function getNextEvent(events) {
    const sortedEvents = sortEventsByDate(events);
    const nextEvent = sortedEvents[0];

    if (!nextEvent) {
        return null;
    }

    return nextEvent;
};

function sortEventsByDate(events) {
    return events.sort((a, b) => {
        return new Date(a.eventDate) - new Date(b.eventDate);
    });
}
