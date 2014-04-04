'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should load the index page with old hobs', function() {
    expect(browser.getLocationAbsUrl()).toMatch("index.html");
  });

});
