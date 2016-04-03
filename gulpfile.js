// Load in the dependancies
var elixir = require('laravel-elixir');
var browsersync = require('laravel-elixir-browsersync2');

// Setup the paths
var path = {
    bower:  './bower_components/',
    node:   './node_modules/',
    css:    './app/resources/css/',
    js:     './app/resources/js/',
    images:     './app/resources/images/',
    destination: './public/'
};

// Add the vendor scripts in here, generally from bower_components or node_modules
var vendorScripts = [
    path.bower + 'jquery/dist/jquery.slim.js',
    path.bower + 'lodash/dist/lodash.js'
];

// Main task
elixir(function(mix) {

    // Copy the main html file from the app folder to the public
    mix.copy('./app/index.html', path.destination + 'index.html');

    // Copy the fonts
    mix.copy(path.node + 'font-awesome/fonts/', path.destination + 'fonts/');

    // Copy the images
    mix.copy(path.images, path.destination + 'images/');

    // Compile the Sass file to the public folder
    mix.sass(path.css + 'main.scss', path.destination + 'css/main.css');

    // Concatenate the Vendor scripts
    mix.scripts(vendorScripts, path.destination + 'js/vendor.js');

    // Browserify the main js app
    mix.browserify(path.js + 'app.js', path.destination + 'js/app.js');


    // Browsersync the app
    //browsersync.init();
    //mix.BrowserSync({
    //    proxy 			: "setgame.dev/",
    //    logPrefix		: "Laravel Elixir BrowserSync",
    //    logConnections	: false,
    //    reloadOnRestart : true,
    //    notify 			: true
    //});

});

