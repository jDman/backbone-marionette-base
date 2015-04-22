'use strict';

var _          = require('underscore'),
    jq         = require('jquery'),
    Backbone,
    Marionette;

    Backbone   = require('backbone');
    Backbone.$ = jq;
    Backbone.Marionette = require('backbone.marionette');

    Marionette = Backbone.Marionette;

var BBTumbler = new Marionette.Application();

module.exports = BBTumbler;
