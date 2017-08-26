'use strict';

const helpMessages = require('../messages/help');

module.exports = function() {
    console.log('Handler: Help');

    this.emit(':ask', helpMessages.speech, helpMessages.repromptSpeech);
};
