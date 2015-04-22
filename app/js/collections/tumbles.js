'use strict';

var _           = require('underscore'),
    jq          = require('jquery'),
    Backbone,
    TumbleModel = require('../models/tumble.js');

    Backbone    = require('backbone');
    Backbone.$  = jq;

var TumbleCollection = Backbone.Collection.extend({
    model : TumbleModel,
    url : function () {

    }
});

module.exports = TumbleCollection;
