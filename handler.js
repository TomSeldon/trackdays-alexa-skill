'use strict';

const Alexa = require('alexa-sdk');

const handlers = {
    // Custom
    FindNextTrackDayAtVenueIntent: require('./handlers/find-next-track-day-at-venue-intent'),

    // Standard Alexa handlers
    LaunchRequest: require('./handlers/launch-handler'),
    'AMAZON.HelpIntent': require('./handlers/help-intent'),
    'AMAZON.CancelIntent': require('./handlers/exit-handler'),
    'AMAZON.StopIntent': require('./handlers/exit-handler'),
    Unhandled: require('./handlers/unhandled-handler')
};

module.exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);

    alexa.APP_ID = 'amzn1.ask.skill.f3de0848-097a-4cc5-b685-b2c92b3f2b39';

    alexa.registerHandlers(handlers);
    alexa.execute();
};
