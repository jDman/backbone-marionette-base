'use strict';

var _                    = require('underscore'),
    jq                   = require('jquery'),
    Backbone,
    Marionette;

    Backbone             = require('backbone');
    Backbone.$           = jq;
    Backbone.Marionette  = require('backbone.marionette');

    Marionette = Backbone.Marionette;

if (window.__agent) {
    window.__agent.start(Backbone, Marionette);
}

var BBTumbler            = require('./setup'),
    BBTLayoutView        = require('./layout'),

    layoutView           = new BBTLayoutView();

    BBTumbler.addRegions({
      container: '#container'
    });

    layoutView.render();

    jq('#container').html(layoutView.$el);

    BBTumbler.on('start', function() {

      if (Backbone.history){
        Backbone.history.start();
      }

    });

    BBTumbler.start();
