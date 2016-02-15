/*global Backbone*/

var Flux = {};

(function() {
  'use strict';

  /*
   * Global dispatcher is just a clone of Backbone Events object.
   */
  Flux.Dispatcher = function() {
    return _.clone(Backbone.Events);
  };

  /*
   * Store base class.
   */
  var StorePrototype = function() {
    return _.extend({
      items: new Backbone.Collection(),
      getItems: function() {
        return this.items;
      },
      saveItems: function(items) {
        this.items.reset(items);
      },
      addItem: function(item) {
        this.items.add(item);
      },
      removeItem: function(item) {
        this.items.remove(item);
      }
    }, Backbone.Events);
  };

  /*
   * Store factory function.
   */
  Flux.Store = function(object) {
    var extendingObject = _.isUndefined(object) ? {} : object;
    var store = _.extend(extendingObject, new StorePrototype());
    if (_.isFunction(store.initialize)) {
      store.initialize();
    }

    return store;
  };
})();
