'use strict';

const exitMessages = require('../messages/exit');

module.exports = function() {
    console.log('Handler: Exit');

    this.emit(':tell', exitMessages.speech);
};
