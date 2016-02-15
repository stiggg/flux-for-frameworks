# flux-for-frameworks

This library is a collection of small implementations of Flux architecture for JS frameworks.

## Motivation

Provide very light-weight versions of Flux architecture for Backbone and AngularJS libraries.

## Backbone

Backbone actually has almost complete collection of utilities for building Flux: There's
Backbone.Events that can be used as event dispatcher as is. Backbone.Collection object
needs just a light-weight factory wrapper to work as store.

I've intentionally left out actions class from this implementation, because in many cases
they just wrap calls to event dispatcher. It's much more straightforward to call
event dispatcher directly.

### Usage

Include [flux.backbone.js](src/flux.backbone.js) into your application, and you're good to go.

See [example usage](examples/backbone.html).

## AngularJS


### Usage
