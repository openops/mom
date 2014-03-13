Angular.js
======================
## An Introduction to Angular.js
MOM will use Angular because it is a structural framework for dynamic web apps which is  well-suited for building 
web apps in a concise way. A main benefit to Angular over jQuery are that loops and explicit back-and-forth with the server will be absent from your code, since Angular provides such a succinct and clean method of achieving the same things. The main advantage over jQuery is that the loops and explicit back-and-forth with the server will be absent from your code, since Angular provides such a concise and clean method of achieving the same things.

##Directives

Angular uses directives to plug its action into the page. Directives, all prefaced with ng-, are placed in html attributes. Some common directives that come pre-built with Angular are:

- **ng-app:** this is essentially the initial entry point of Angular to the page. 
It tells Angular where it gets to act. `<html ng-app>` is all it takes to define a page as 
an Angular application.

- **ng-bind:** changes the text of an element to the value of an expression.
`<span ng:bind=”name”></span>` will display the value of 'name’ inside the span. Any changes to 
‘name’ are reflected instantly in the DOM anywhere the variable is used.

- **ng-controller:** specifies the JavaScript class for the given action. 
Controllers are typically kept in external .js files.

- **ng-repeat:** creates the very clean loop structures in your page.
```html
<ul>
<li ng-repeat="item in items">
{{item.description}}
</li>
</ul>
```
This loops through each item in the collection.

## A quick example

As said before, the ng-app directive in the `<html>` tag sets the stage for Angular to run in the page.
```html
<html lang="en" ng-app>
```

Add `<script src=”path/to/angular.js”></script>` to the page head to bring in the Angular framework itself.

`<script src=”your/path/to/controllers.js”></script>` points to the file that hold the JavaScript classes your Angular app will call. An example class, as an example, might be:
```javascript
function ItemListCtrl ($scope) {
 $scope.items = [
 { "description": "table" },
 { "description": "chair" },
 { "description": "desk" },
 ];
}
```
Passing ng-controller *ItemListCtrl*, the name of my JavaScript class, tells Angular what code to run:
```javascript
<body ng-controller="ItemListCtrl">
```

and double-bracket notation tells Angular what expressions to evaluate.

**ng-repeat** is a wonderfully concise repeater directive that loops through the current collection and does the specified action or provides the specified data.

```html
<p>Stuff around my house</p>
<ul>
<li ng-repeat="item in items">
{{item.description}}
</li>
</ul>
```
This simple code will display:

```
Stuff around my house
table
chair
desk
```

Getting real data into your app is easy too. Angular works with JSON so:

```javascript
function ItemListCtrl ($scope, $http) {
 $http.get(‘items/list.json').success(function (data) {
 $scope.items = data;
 }
}
```

This returns a JSON object that can manipulated in your Angular app.
