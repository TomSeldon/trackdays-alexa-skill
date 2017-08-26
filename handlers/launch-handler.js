'use strict';

const launchMessages = require('../messages/launch');

module.exports = function() {
    console.log('Handler: Launch');

    this.emit(':ask', launchMessages.speech, launchMessages.repromptSpeech);
};
