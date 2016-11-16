/**
 * System configuration for Angular 2 application
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            '@progress/kendo-angular-charts': 'npm:@progress/kendo-angular-charts',
            '@telerik/kendo-inputs-common': 'npm:@telerik/kendo-inputs-common',
            '@telerik/kendo-draggable': 'npm:@telerik/kendo-draggable',
            '@telerik/kendo-dropdowns-common': 'npm:@telerik/kendo-dropdowns-common',
            '@telerik/kendo-intl': 'npm:@telerik/kendo-intl',
            '@progress/kendo-angular-intl': 'npm:@progress/kendo-angular-intl',
            '@progress/kendo-angular-popup': 'npm:@progress/kendo-angular-popup',
            '@progress/kendo-charts': 'npm:@progress/kendo-charts',
            '@progress/kendo-drawing': 'npm:@progress/kendo-drawing',
            '@progress/kendo-popup-common': 'npm:@progress/kendo-popup-common',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            'ng2-translate': 'node_modules/ng2-translate',
            'primeng': 'node_modules/primeng',
            'materialize-css': 'node_modules/materialize-css',
            'materialize': 'node_modules/angular2-materialize',
            'angular2-materialize': 'node_modules/angular2-materialize',  
            'angular2-loaders-css': 'node_modules/angular2-loaders-css',

            // other libraries
            'rxjs': 'npm:rxjs',
            'chroma-js': 'npm:chroma-js',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'chroma-js': {
                main:'./chroma.js',
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-translate': {
                defaultExtension: "js"
            },
            'primeng': {
                defaultExtension: 'js'
            },
            'materialize-css': {
                main: "dist/js/materialize"
            },
            'materialize': {
                main: "dist/materialize-directive",
                defaultExtension: "js"
            },
            'angular2-loaders-css': {
                main: 'index.js',
                defaultExtension: "js"
            },
            "@progress/kendo-angular-charts": {
                defaultExtension: "js",
                main: "./dist/npm/js/main.js"
            },
            '@telerik/kendo-inputs-common': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@telerik/kendo-draggable': {
                defaultExtension: 'js',
                main: "./dist/npm/js/Draggable.js"
            },
            '@telerik/kendo-dropdowns-common': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@telerik/kendo-intl': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@progress/kendo-angular-intl': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@progress/kendo-angular-popup': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@progress/kendo-charts': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@progress/kendo-drawing': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            },
            '@progress/kendo-popup-common': {
                defaultExtension: 'js',
                main: "./dist/npm/js/main.js"
            }
        }
    });
})(this);

