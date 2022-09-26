'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');
const revReplace = require('gulp-rev-replace');
const rev = require('gulp-rev');
const runSequence = require('run-sequence');
const filter = require('gulp-filter');
const del = require('del');
const integrationTests = require('djangocms-casper-helpers/gulp');
const path = require('path');
const child_process = require('child_process');
const execSync = child_process.execSync;
const browserSync = require('browser-sync').create();


const argv = require('minimist')(process.argv.slice(2));

const options = {
    debug: argv.debug
};
const PROJECT_ROOT = __dirname + '/djangocms_text_ckeditor/static/djangocms_text_ckeditor';
const PROJECT_PATH = {
    js: PROJECT_ROOT + '/js',
    tests: __dirname + '/djangocms_text_ckeditor/tests/frontend'
};

const PROJECT_PATTERNS = {
    js: [
        PROJECT_PATH.js + '/**/*.js',
        PROJECT_PATH.js + '/../ckeditor_plugins/**/*.js',
        '!' + PROJECT_PATH.js + '/pre.js',
        '!' + PROJECT_PATH.js + '/post.js',
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
const JS_BUNDLE = [
    PROJECT_PATH.js + '/pre.js',
    PROJECT_PATH.js + '/cms.ckeditor.js',
    PROJECT_PATH.js + '/../ckeditor/ckeditor.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmswidget/plugin.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmsdialog/plugin.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmsresize/plugin.js',
    PROJECT_PATH.js + '/../ckeditor_plugins/cmsplugins/plugin.js',
    PROJECT_PATH.js + '/post.js'
];

const lint = () => {
  return (
    gulp
      .src(PROJECT_PATTERNS.js)
      .pipe(gulpif(!process.env.CI, plumber()))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(gulpif(!process.env.CI, plumber.stop()))
  );
};

const INTEGRATION_TESTS = [
    ['smoke']
];

// gulp tests:integration [--clean] [--screenshots] [--tests=loginAdmin,toolbar]
const pathToBin = child_process.execSync('npm bin').toString().trim();
const pathToCasper = path.join(pathToBin, 'casperjs');

gulp.task('tests:integration', integrationTests({
    tests: INTEGRATION_TESTS,
    pathToTests: PROJECT_PATH.tests,
    argv: argv,
    dbPath: 'testdb.sqlite',
    serverCommand: 'tests/settings.py',
    logger: console.log.bind(console), // eslint-disable-line no-console
    waitForMigrations: 10,
    pathToCasper: pathToCasper
}));

gulp.task('bundle', function (done) {
    runSequence('bundle:cleanup:before', 'bundle:js', 'bundle:template', 'bundle:cleanup', done);
});


// gulp.task('bundle:cleanup:before', function () {
const bundleCleanUpBefore = () => {
    return (
        del([PROJECT_PATH.js + '/dist/'])
    );
};

const bundleJS = () => {
        const f = filter([
            '**',
            '!**/ckeditor/ckeditor.js',
            '!**/pre.js',
            '!**/post.js'
        ], { restore: true });

        return (
            gulp
                .src(JS_BUNDLE)
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
                .pipe(gulp.dest(PROJECT_PATH.js + '/dist/'))
            );
};


const bundleTemplate = () => {

    const manifest = gulp.src(PROJECT_PATH.js + '/dist/rev-manifest.json');

    return (
        gulp
            .src([PROJECT_ROOT + '/../../widgets.py'])
            .pipe(replace(
                /bundle\-*.cms.ckeditor.min.js/,
                'bundle.cms.ckeditor.min.js'
            ))
            .pipe(gulp.dest(PROJECT_ROOT + '/../../'))
            .pipe(revReplace({
                manifest: manifest,
                replaceInExtensions: ['.py']
            }))
            .pipe(gulp.dest(PROJECT_ROOT + '/../../'))
        );
};

const patchForDarkmode = async function(){
   console.log( execSync('cd private && python3 ./patch_moono_lisa.py').toString());
};


const bundleCleanup = () => {
    return (
        del([PROJECT_PATH.js + '/dist/rev-manifest.json'])
    );

};

const watchFiles = () => {
    browserSync.init();
    gulp.watch(PROJECT_PATTERNS.js, lint);
    gulp.watch(JS_BUNDLE, gulp.series(bundleCleanUpBefore, bundleJS, bundleTemplate, bundleCleanup));
};

gulp.task('ci', lint);
// gulp.task('default', ['lint', 'bundle', 'watch']);

gulp.task("lint", lint);
gulp.task("watch", watchFiles);
gulp.task("darkmode", patchForDarkmode);
gulp.task("bundle", gulp.series(bundleCleanUpBefore, bundleJS, bundleTemplate, bundleCleanup));
gulp.task("build", gulp.series(bundleCleanUpBefore, bundleJS, bundleTemplate, patchForDarkmode, bundleCleanup));
