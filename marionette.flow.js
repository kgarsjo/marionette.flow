'use strict';

var Flow = require('flow');
var Marionette = window.Marionette;

Flow.Action.ShowAction = require('./lib/show_action');
Flow.Builder.MarionetteBuilder = require('./lib/marionette_builder');

if (Marionette) {
    Marionette.FlowBuilder = Flow.Builder.MarionetteBuilder;
}

module.exports = Flow;
