Using CSS3
======================

Our main use of CSS3 will be to add simplistic interactions for a user.
We want users to be able to figure out swipining, tapping, or any other control of the app in a
very natural way. The app should be oozing with simplicity and focus on the fundamentals of phone operation.

## AngularJS Touch Carousel

### Features

- Mobile friendly, tested on webkit+firefox
- use CSS 3D transformations and requestAnimationFrame. (fallback to CSS 2D if 3D support not available)
- DOM buffering
- index data-binding
- optional indicators

[Examples](http://blog.revolunet.com/angular-carousel/)

### Usage
- Add `angular-carousel.css`, `angular-carousel.js` to your code:

```html
<link href="angular-carousel.css" rel="stylesheet" type="text/css" />
<script src="angular.js"></script>
<script src="angular-touch.js"></script>
<script src="angular-carousel.js"></script>
```

- Add a `rn-carousel` attribute to your `<ul>` block and your `<li>`'s become swipable

```html
<ul rn-carousel class="image">
    <li ng-repeat="image in sportImages" style="background-image:url({{ image }});">
	<div class="layer">{{ image }}</div>
    </li>
</ul>
```

- You can also use `rn-carousel` without ng-repeat

```html
<ul rn-carousel class="image">
    <li>slide #1</li>
    <li>slide #2</li>
    <li>slide #3</li>
</ul>
```

## CSS3 Best Practices



