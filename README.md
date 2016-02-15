# flux-for-frameworks

This library is a collection of small implementations of Flux architecture for JS frameworks.

## Motivation

Provide very light-weight versions of Flux architecture for Backbone and AngularJS libraries.

## Backbone

Backbone actually has almost complete collection of utilities for building Flux: There's
Backbone.Events that can be used as event dispatcher as is. Backbone.Collection is an almost
complete store implementation all by itself. We could use it as-is, however here it's wrapped
into another object to keep standard collection events separate from explicitly defined
user events.

I've intentionally left out actions class from this implementation, because in many cases
they just wrap calls to event dispatcher. It's much more straightforward to call
event dispatcher directly.

### Usage

Include [flux.backbone.js](src/flux.backbone.js) into your application. See [example usage](examples/backbone.html).

## AngularJS

AngularJS needs a bit more work. A simple event dispatcher, store and action factory
are needed to use Flux. The key thing with AngularJS is remember to NOT use two-way databinding, and only update
the view in response to store state changes. It's also a good idea to use directives to
[isolate code (and scope) into components](examples/angular.html).

### Usage

Include [flux.angular.js](src/flux.angular.js) into your application. See [example usage](examples/angular.html).
