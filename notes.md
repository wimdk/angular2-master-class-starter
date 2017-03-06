# Notes

## This course : [Angular master class](http://thoughtram.io/angular-master-class.html)

## day 1

### jump start tutorial

* Angular is evolving from a framework to a platform (now in the core-platform : compile, render, dependency injection, ...)
* Typescript is superset of es2015 is superset of ES5 : so everything you want to use of es5 you can still use in typescript
* ES2015 offers modules : each file in es2015 is essentially a module. export keyword exposes classes to other modules. import statement lets you import exposed classes from other modules
* Typescript has type inference, so no need to annotate the type when declaring variables. However good thing to add type annotations on function parameters, since it's an interface.
* When type inference doesn't find the type, it assigns the any-type. You can configure typescript to not infer to the any-type.

* Bootstrapping Angular : 
** Decorators : e.g. @Component : adds metadata to a class
** NgModule : es2015-module doesn't give enough functionality for angular to do what angular has to do. NgModule solves grouping things on the angular-framework-level.
** Bootstrapping the application :  have a look at the references.md on the subject of webcomponents' shadow-dom
** Change-detection happens only once, in contrast to angular 1, where there were possibly several passes of changedetection (with possible performance hit). In angular 2, there's the concept of a component-tree, Change-detection drills down the component-tree (unidirectional). As a developer you should make sure you don't violate this rule. -> Look into this, it wasn't exactly clear what the impact is...


* displaying data

* square-brackets : [src] = "contact.image" -> right-hand side is an expression if left-hand side has square brackets. We don't need curly braces when using an expression.

* Difference between properties and attributes  : 4 ways of working with the dom : properties, attributes, methods and events.
** Attributes are what we use as attributes in html
** Behind the scenes in our dom there's an object behind the element in my html. The javascript-object has properties. The browser fills in the value of the property into the value of an attribute in an element in html.

* Understanding the injector tree : not exactly clear what this is doing. -> look deeper into it. More info over [here](https://angular.io/docs/ts/latest/guide/hierarchical-dependency-injection.html)




