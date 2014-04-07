Testing with AngularJS
---------------------------


Unit testing is a technique that helps developers validate isolated pieces of code. 
End to end testing (E2E) comes into play when you want to ascertain that a set of components, when integrated together, 
work as expected. AngularJS, being a modern JavaScript MVC framework, offers full support for unit tests and E2E tests. 
Writing tests while developing Angular apps can save a great deal of time which you would have otherwise wasted fixing unexpected bugs. 
we will use Jasmine as the testing framework and Karma as the test runner.

### Karma
A simple tool that allows you to execute JavaScript code in multiple real browsers.
Karma is not a testing framework, neither an assertion library. Karma just launches a HTTP server, 
and generates the test runner HTML file you probably already know from your favourite testing framework. 
So for testing purposes you can use pretty much anything you like. 
There are already plugins for most of the common testing frameworks

`karma init my.conf.js`

```bash
# Start Karma using your configuration
$ karma start my.conf.js
```
When using Grunt within your project, the grunt-karma plugin is useful. The grunt-karma plugin allows you to 
place your Karma configurations directly within your Gruntfile. By doing so, the central karma.conf.js is no longer required. 
However, this also means that Karma must also be run as a Grunt task.

[Grunt Karma GitHub Page](https://github.com/karma-runner/grunt-karma#running-tests)

### Jasmine

Jasmine is a Behavior Driven Development testing framework for JavaScript. 
It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, 
Node.js projects, or anywhere that JavaScript can run.

Jasmine aims to be easy to read. A simple hello world test looks like the code below, where *describe()* describes a 
suite of tests and *it()* is an individual test specification. The name *it()* follows the idea of behavior-driven 
development and serves as the first word in the test name, which should be a complete sentence.

```jasmine
describe('Hello world', function() {
    it('says hello', function() {
	expect(helloWorld()).toEqual("Hello world!");
    });
});
```

### Protractor

Protractor is an end-to-end test framework for AngularJS applications built on top of WebDriverJS. 
Protractor runs tests against your application running in a real browser, interacting with it as a user would.
Protractor can be run as a standalone binary, or included into your tests as a library. 
Install protractor with:

`npm install -g protractor`

The node module's example folder contains a simple test suite which runs against angularjs.org. Run with:

`protractor example/conf.js`

You will need a configuration file containing setup info and test files containing the actual test scripts. 
The config file specifies how the runner should start webdriver, where your test files are, and global setup options. 
The test files use Jasmine framework by default.
