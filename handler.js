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

    alexa.APP_ID = '';

    alexa.registerHandlers(handlers);
    alexa.execute();
};
