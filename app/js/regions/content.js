'use strict';

var _          = require('underscore'),
    jq         = require('jquery'),
    Backbone,
    Marionette;

    Backbone   = require('backbone');
    Backbone.$ = jq;
    Backbone.Marionette = require('backbone.marionette');

    Marionette = Backbone.Marionette;


var contentRegion = Marionette.Region.extend({
                  el: "#content"
                 });

module.exports = contentRegion;
