# flux-for-frameworks

This library is a collection of small implementations of Flux architecture for JS frameworks (Backbone and AngularJS currently).

## Motivation

Low amount of code. Use factories to reduce boilerplate. Make it easy to create components,
with their own view and data storage. Facilitate communication between those components.
Do not wrap other frameworks, and then require update when the underlying framework changes.
Provide common API for stores between different framework implementations, making
code sharing/reuse easy.

## Installation

```
bower install flux-for-frameworks --save
```

## Backbone

Backbone has almost complete collection of utilities for building Flux: There's
Backbone.Events that can be used as an event dispatcher as it is, and Backbone.Collection is an almost
complete store implementation all by itself. Here collection is wrapped
into another object to provide a common event emitter API.

### Usage

Include [flux.backbone.js](src/flux.backbone.js) into your application. See [example usage](examples/backbone.html).

## AngularJS

The key thing with AngularJS is to remember to only update the view in response to
store state changes, and try not to rely on default two-way data binding. It helps,
if you use directives to split scope into several components
[see example](examples/angular.html).

### Usage

Include [flux.angular.js](src/flux.angular.js) and add ```fluxForAngular``` module to application. See [example usage](examples/angular.html).

## Development

Install Vagrant to your computer, and run ```vagrant up```. You can then browse examples at http://192.168.56.70/.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/stiggg/flux-for-frameworks/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

