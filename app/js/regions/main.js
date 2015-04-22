'use strict';

var _          = require('underscore'),
    jq         = require('jquery'),
    Backbone,
    Marionette;

    Backbone   = require('backbone');
    Backbone.$ = jq;
    Backbone.Marionette = require('backbone.marionette');

    Marionette = Backbone.Marionette;

var mainRegion = Marionette.Region.extend({
                  el: "#main"
                 });

module.exports = mainRegion;
