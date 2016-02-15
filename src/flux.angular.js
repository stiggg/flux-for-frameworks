/*global angular,_*/
'use strict';

angular.module('fluxForAngular')
  .factory('eventEmitterFactory', ['$log', function($log) {
    return {
      create: function() {
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
          }
        };
      }
    };
  }])
  /*
   * Factory used to create stores:
   * var newStore = storeFactory.create();
   */
  .factory('storeFactory', ['eventEmitterFactory', function(eventEmitterFactory) {
    var StorePrototype = function() {
      return _.extend({
        items: [],
        getItems: function() {
          return this.items;
        },
        saveItems: function(items) {
          this.items = items;
          return this;
        },
        addItem: function(item) {
          this.items.push(item);
          return this;
        },
        removeItem: function(item) {
          var index = this.items.indexOf(item);
          this.items.splice(index, 1);
          return this;
        }
      }, eventEmitterFactory.create());
    };

    return {
      create: function(object) {
        var extendingObject = _.isUndefined(object) ? {} : object;
        var store = _.extend(extendingObject, new StorePrototype());
        if (_.isFunction(store.initialize)) {
          store.initialize();
        }

        return store;
      }
    };
  }])
  /*
   * Global event dispatcher is an instance of event emitter, created here for
   * convenience.
   */
  .factory('dispatcher', ['eventEmitterFactory', function(eventEmitterFactory) {
    return eventEmitterFactory.create();
  }])
  /*
   * A simple action factory service.
   * var SAVE_ACTION = 'SAVE_ACTION';
   * var loadAction = actionFactory.create(SAVE_ACTION, someItem);
   */
  .factory('actionFactory', function() {
    return {
      create: function(
        actionType,
        item
      ) {
        return {
          'actionType': actionType,
          'item': item
        };
      }
    };
  });
