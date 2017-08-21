'use strict';

module.exports = function() {
    const vehicleTypeSlot = 'VEHICLE_TYPE';
    const trackNameSlot = 'TRACK_NAME';
    const intent = this.event.intent;
    const hasSpecifiedVehicleType = Boolean(intent.slots[vehicleTypeSlot].id);
    const hasSpecifiedTrackName = Boolean(intent.slots[trackNameSlot].id);

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

    const trackName = intent.slots[trackNameSlot].id;
    const vehicleType = intent.slots[vehicleTypeSlot].id;

    // TODO: Find the next track day at specified track

    this.emit(
        ':tell',
        'Sorry, I was unable to find a track day at that venue',
        'Unable to find track day information'
    );
};
