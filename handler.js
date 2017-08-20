'use strict';

const Alexa = require('alexa-sdk');

const noopHandler = (event, context, callback) => callback();

const handlers = {
    LaunchRequest: noopHandler,
    'AMAZON.HelpIntent': noopHandler,
    'AMAZON.CancelIntent': noopHandler,
    'AMAZON.StopIntent': noopHandler,
    Unhandled: noopHandler
};

module.exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);

    alexa.APP_ID = 'amzn1.ask.skill.f3de0848-097a-4cc5-b685-b2c92b3f2b39';

    alexa.registerHandlers(handlers);
    alexa.execute();
};
