'use strict';

var _          = require('underscore'),
    jq         = require('jquery'),
    Backbone;

    Backbone   = require('backbone');
    Backbone.$ = jq;

var TumbleModel = Backbone.Model.extend({

  defaults: {
            title: 'N/A',
            description: 'N/A',
            url: '',
            avatar_url: '',
            likes: ''
        }

});

module.exports = TumbleModel;
