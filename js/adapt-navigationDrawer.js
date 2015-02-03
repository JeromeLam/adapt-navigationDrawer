/*
 * adapt-navigationDrawer
 * License - https://github.com/JeromeLam/adapt-navigationDrawer/blob/master/LICENSE
 * Maintainers - Jerome Lam <jerome.lam@gmail.com>
 */

define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var navigationDrawer = new(Backbone.View.extend({}))();

    navigationDrawer.$el = $('<div>').addClass("navigationDrawer").appendTo($("body"));

    Adapt.navigationDrawer = navigationDrawer;
});
