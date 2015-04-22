var _                   = require('underscore'),
    jq                  = require('jquery'),
    Backbone,
    Marionette;

    Backbone            = require('backbone');
    Backbone.$          = jq;
    Backbone.Marionette = require('backbone.marionette');

    Marionette          = Backbone.Marionette;

//****** COLLECTION VIEW ******

var TumbleCollectionView = Marionette.CollectionView.extend({

    id: 'main',

    tagName: 'ul',

    childEvents: {
      render: function() {
        console.log('a childView has been rendered');
      }
    },

    onRender: function () {
      console.log('collection render');
    }

});

module.exports = TumbleCollectionView;
