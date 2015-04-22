var _                   = require('underscore'),
    jq                  = require('jquery'),
    Backbone,
    Marionette,
    tumbleItemTemplate  = require('../../templates/tumbleItem.js'),
    tumbleItemHtml      = tumbleItemTemplate;

    Backbone            = require('backbone');
    Backbone.$          = jq;
    Backbone.Marionette = require('backbone.marionette');

    Marionette = Backbone.Marionette;

//****** ITEM VIEW ******

var TumbleItemView = Marionette.ItemView.extend({

    tagName: 'li',

    template: tumbleItemHtml

});

module.exports = TumbleItemView;
