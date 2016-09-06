'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');
var revReplace = require('gulp-rev-replace');
var rev = require('gulp-rev');
var runSequence = require('run-sequence');
var filter = require('gulp-filter');
var del = require('del');

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
var JS_BUNDLE = [
    PROJECT_PATH.js + '/../ckeditor/ckeditor.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmswidget/plugin.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmsdialog/plugin.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmsresize/plugin.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmsplugins/plugin.js',
    PROJECT_PATH.js + '/cms.ckeditor.js'
];

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

gulp.task('bundle', function (done) {
    runSequence('bundle:cleanup:before', 'bundle:js', 'bundle:template', 'bundle:cleanup', done);
});

gulp.task('bundle:cleanup:before', function () {
    return del([PROJECT_PATH.js + '/dist/']);
});

gulp.task('bundle:js', function () {
    var f = filter([
        '**',
        '!**/ckeditor/ckeditor.js'
    ], { restore: true });

    return gulp.src(JS_BUNDLE)
        .pipe(gulpif(options.debug, sourcemaps.init()))
        .pipe(f)
        .pipe(gulpif(!options.debug, uglify({
            preserveComments: 'some'
        })))
        .pipe(f.restore)
        .pipe(concat('bundle.cms.ckeditor.min.js', {
            newLine: '\n'
        }))
        .pipe(rev())
        .pipe(gulpif(options.debug, sourcemaps.write()))
        .pipe(gulp.dest(PROJECT_PATH.js + '/dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(PROJECT_PATH.js + '/dist/'));
});

gulp.task('bundle:template', function () {
    var manifest = gulp.src(PROJECT_PATH.js + '/dist/rev-manifest.json');

    return gulp.src([PROJECT_ROOT + '/../../templates/cms/plugins/widgets/ckeditor.html'])
        .pipe(replace(
            /bundle.*.cms.ckeditor.min.js/,
            'bundle.cms.ckeditor.min.js'
        ))
        .pipe(gulp.dest(PROJECT_ROOT + '/../../templates/cms/plugins/widgets/'))
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(PROJECT_ROOT + '/../../templates/cms/plugins/widgets/'));
});

gulp.task('bundle:cleanup', function () {
    return del([PROJECT_PATH.js + '/dist/rev-manifest.json']);
});

gulp.task('build', ['bundle']);

gulp.task('watch', function () {
    gulp.watch(PROJECT_PATTERNS.js, ['lint']);
    gulp.watch(JS_BUNDLE, ['bundle']);
});

gulp.task('default', ['lint', 'bundle', 'watch']);
