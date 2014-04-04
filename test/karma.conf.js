module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/bower_packages/angular/angular.js',
      'public/bower_packages/angular-route/angular-route.js',
      'public/bower_packages/angular-mocks/angular-mocks.js',
      'public/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
