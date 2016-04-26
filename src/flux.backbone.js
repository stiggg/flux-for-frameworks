/*global Backbone,_*/

var Flux = {};

(function() {
  'use strict';

  var EventEmitter = function() {
    return {
      listeners: [],

      emit: function(event) {
        // remove comment to log all events
        // $log.log(event);
        this.listeners.forEach(function(listener) {
          listener(event);
        });
      },

      addListener: function(listener) {
        this.listeners.push(listener);
        return this.listeners.length - 1;
      },

      clearListeners: function() {
        this.listeners = [];
      }
    };
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
    }, new EventEmitter());
  };

  /*
   * Global dispatcher is just a clone of Backbone Events object.
   */
  Flux.Dispatcher = function() {
    return _.clone(Backbone.Events);
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

  Flux.Action = function(type, payload) {
    return {
      type: type,
      payload: payload,
    };
  };
})();
