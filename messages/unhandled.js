'use strict';

const launchMessages = require('./launch');

exports.speech = `<p>I'm sorry, I don't know how to do that.</p> ${launchMessages.speech}`;
exports.rempromptSpeech = launchMessages.speech;
