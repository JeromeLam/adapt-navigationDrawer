/*
 * adapt-navigationDrawer
 * License - https://github.com/JeromeLam/adapt-navigationDrawer/blob/master/LICENSE
 * Maintainers - Jerome Lam <jerome.lam@gmail.com>
 */

define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var NavigationDrawerView = Backbone.View.extend({

        className: "navigationDrawerView",

        initialize: function () {
            this.listenTo(Adapt, 'remove', this.remove);
            this.preRender();
            this.render();
        },

        events: {},

        preRender: function() {},

        render: function () {
            var data = this.model.toJSON();
            var template = Handlebars.templates["navigationDrawerItem"];
            this.$el.html(template(data));
            _.defer(_.bind(function() {
                this.postRender();
            }, this));
            return this;

        },

        postRender: function() {}
s
    });

    return NavigationDrawerView;

});
