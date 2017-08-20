'use strict';

const exitMessages = require('../messages/exit');

module.exports = function() {
    this.emit(':tell', exitMessages.speech);
};
