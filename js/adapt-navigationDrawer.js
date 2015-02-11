/*
 * adapt-navigationDrawer
 * License - https://github.com/JeromeLam/adapt-navigationDrawer/blob/master/LICENSE
 * Maintainers - Jerome Lam <jerome.lam@gmail.com>
 */

define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var NavigationDrawerView = require('extensions/adapt-navigationDrawer/js/adapt-navigationDrawerView');

    var navigationDrawer = Backbone.View.extend({

        initialize: function() {
            this.listenTo(Adapt, 'navigationDrawer:toggle', this.toggle);
            this.preRender();
            this.render();
        },

        preRender: function() {},

        render: function() {
            this.$el = $('<div>').addClass("navigationDrawer").appendTo($("body"));

            if (this.model.get("_display")) {
                var elementSelector = $(this.model.get("_display").elementSelector);
                var openFrom = this.model.get("_display").openFrom;
                if (elementSelector) {
                    this.$el.addClass('open-from-' + openFrom);

                    switch (openFrom) {
                        case 'bottom':
                            this.$el.css('top', elementSelector.offset().top + elementSelector.height());
                            break;
                        case 'top':
                            this.$el.css('bottom', elementSelector.offset().top);
                            break;
                    }
                }
            }

            var template = Handlebars.templates["navigationDrawer"];
            this.$el.html(template());

            _.defer(_.bind(function() {
                this.postRender();
            }, this));
        },

        postRender: function() {
            var $navigationDrawerInner = this.$('.navigationDrawer-inner').empty();

            var navigationDrawerView = new NavigationDrawerView({model: new Backbone.Model({})});
            this.$('.navigationDrawer-inner').html(navigationDrawerView.$el.html());

            Adapt.navigationDrawerControl = new navigationDrawerControl({ model: this.model });
        },

        toggle: function() {
            this.$el.toggleClass('active');
        }

    });

    var navigationDrawerControl = Backbone.View.extend({

        tagName: 'a',

        className: 'navigation-drawer-control',

        initialize: function() {
            this.listenTo(Adapt, 'remove', this.remove);
            this.$el.attr('href', '#');
            this.preRender();
            this.render();
            this.postRender();
        },

        events: {
            'click': 'trigger'
        },

        preRender: function() {},

        render: function() {
            var template = Handlebars.templates["navigationDrawerControl"];
            this.$el.html(template());

            if (this.model.get("_display")) {
                var appendControlToSelector = $(this.model.get("_display").appendControlToSelector);
                appendControlToSelector.append(this.$el);
            }

            return this;
        },

        postRender: function() {},

        trigger: function(event) {
            event.preventDefault();
            Adapt.trigger("navigationDrawer:toggle");
        }

    });

    Adapt.once("app:dataReady", function() {
        Adapt.navigationDrawer = new navigationDrawer({ model: new Backbone.Model(Adapt.course.get("_navigationDrawer")) });
    });
});
