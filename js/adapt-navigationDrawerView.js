/*
* adapt-navigationDrawer
* License - https://github.com/JeromeLam/adapt-navigationDrawer/blob/master/LICENSE
* Maintainers - Jerome Lam <jerome.lam@gmail.com>
*/

define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var ExtensionView = Backbone.View.extend({

        className: "extension",

        initialize: function () {
            // Listen to Adapt 'remove' event which is called
            // when navigating through the router
            // This cleans up zombie views and prevents memory leaks
            this.listenTo(Adapt, 'remove', this.remove);
            // On initialize start the render process
            this.preRender();
            this.render();
        },

        events: {},

        preRender: function() {},

        render: function () {
            // Convert model data into JSON
            var data = this.model.toJSON();
            // Get handlebars template
            var template = Handlebars.templates["extension"];
            // Push data into template and append template
            this.$el.html(template(data)).appendTo('#wrapper');
            // Defer is used here to make sure the template has rendered
            // before calling postRender
            // This way postRender can manipulate this view after it has
            // been rendered
            _.defer(_.bind(function() {
                this.postRender();
            }, this));

            // Return this so we can change the render method
            // this.render().$el.addClass('explode');
            return this;

        },

        postRender: function() {}

    });
    
    // Return ExtensionView so it can be required
    return ExtensionView;

});