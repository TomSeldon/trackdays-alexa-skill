'use strict';

const Alexa = require('alexa-sdk');

const handlers = {
    LaunchRequest: require('./handlers/launch'),
    'AMAZON.HelpIntent': require('./handlers/help-intent'),
    'AMAZON.CancelIntent': require('./handlers/exit-hander'),
    'AMAZON.StopIntent': require('./handlers/exit-hander'),
    Unhandled: require('./handlers/unhandled-handler')
};

module.exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);

    alexa.APP_ID = 'amzn1.ask.skill.f3de0848-097a-4cc5-b685-b2c92b3f2b39';

    alexa.registerHandlers(handlers);
    alexa.execute();
};
