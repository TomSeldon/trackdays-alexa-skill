'use strict';

const unhandledMessages = require('../messages/unhandled');

module.exports = function() {
    console.log('Handler: Unhandled');

    this.emit(
        ':ask',
        unhandledMessages.speech,
        unhandledMessages.repromptSpeech
    );
};
