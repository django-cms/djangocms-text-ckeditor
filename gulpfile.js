'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');

var argv = require('minimist')(process.argv.slice(2));

var options = {
    debug: argv.debug
};
var PROJECT_ROOT = __dirname + '/djangocms_text_ckeditor/static/djangocms_text_ckeditor';
var PROJECT_PATH = {
    js: PROJECT_ROOT + '/js'
};

var PROJECT_PATTERNS = {
    js: [
        PROJECT_PATH.js + '/**/*.js',
        PROJECT_PATH.js + '/../ckeditor_plugins/**/*.js',
        PROJECT_PATH.js + '/gulpfile.js',
        '!' + PROJECT_PATH.js + '/../ckeditor_plugins/cmsresize/*.js',
        '!' + PROJECT_PATH.js + '/../ckeditor_plugins/cmsdialog/*.js',
        '!' + PROJECT_PATH.js + '/../ckeditor/**/*.js',
        '!' + PROJECT_PATH.js + '/dist/*.js'
    ]
};

/*
 * Object keys are filenames of bundles that will be compiled
 * from array of paths that are the value.
 */
var JS_BUNDLES = {
    'bundle.cms.ckeditor.min.js': [
        PROJECT_PATH.js + '/../ckeditor/ckeditor.js',
        PROJECT_PATH.js + '/../ckeditor_plugins/cmswidget/plugin.js',
        PROJECT_PATH.js + '/../ckeditor_plugins/cmsdialog/plugin.js',
        PROJECT_PATH.js + '/../ckeditor_plugins/cmsresize/plugin.js',
        PROJECT_PATH.js + '/../ckeditor_plugins/cmsplugins/plugin.js',
        PROJECT_PATH.js + '/cms.ckeditor.js'
    ]
};

gulp.task('lint', ['lint:javascript']);
gulp.task('lint:javascript', function () {
    // DOCS: http://eslint.org
    return gulp.src(PROJECT_PATTERNS.js)
        .pipe(gulpif(!process.env.CI, plumber()))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(gulpif(!process.env.CI, plumber.stop()));
});

Object.keys(JS_BUNDLES).forEach(function (bundleName) {
    var bundleFiles = JS_BUNDLES[bundleName];

    gulp.task('bundle:' + bundleName, function () {
        return gulp.src(bundleFiles)
            .pipe(gulpif(options.debug, sourcemaps.init()))
            .pipe(gulpif(!options.debug, uglify({
                preserveComments: 'some'
            })))
            .pipe(concat(bundleName, {
                newLine: '\n'
            }))
            .pipe(gulpif(options.debug, sourcemaps.write()))
            .pipe(gulp.dest(PROJECT_PATH.js + '/dist/'));
    });
});

gulp.task('build', ['bundle']);
gulp.task('bundle', Object.keys(JS_BUNDLES).map(function (bundleName) {
    return 'bundle:' + bundleName;
}));

gulp.task('watch', function () {
    gulp.watch(PROJECT_PATTERNS.js, ['lint']);
    Object.keys(JS_BUNDLES).forEach(function (bundleName) {
        var bundleFiles = JS_BUNDLES[bundleName];

        gulp.watch(bundleFiles, ['bundle:' + bundleName]);
    });
});

gulp.task('default', ['lint', 'bundle', 'watch']);
