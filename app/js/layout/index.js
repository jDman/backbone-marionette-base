'use strict';

var _                        = require('underscore'),
    jq                       = require('jquery'),
    Backbone,
    Marionette,
    mainTemplate             = require('../../templates/main.js'),
    mainHtml                 = mainTemplate();

    Backbone                 = require('backbone');
    Backbone.$               = jq;
    Backbone.Marionette      = require('backbone.marionette');

    Marionette               = Backbone.Marionette;

    var TumbleCollection = require('../collections/tumbles');

    var TumbleCollectionView = require('../views/tumbleCollection'),
        TumbleItemView       = require('../views/tumbleItem');

//****** LAYOUT VIEW ******

var BBTLayoutView = Marionette.LayoutView.extend({

      id: 'layout',

      template: mainHtml,

      regions: {
        content: '#content',
        menu: '#menu'
      },

      onRender: function () {

        var tumbleCollection = new TumbleCollection({title:'unknown man', description:'unknown'});

        var tumbleCollectionView = new TumbleCollectionView({ collection: tumbleCollection, childView: TumbleItemView });

        console.log(this);

        this.content.show(tumbleCollectionView);

      }

    });

module.exports = BBTLayoutView;
