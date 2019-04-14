'use strict';

global.$ = {
    path: {
        task: require('./gulp/paths/tasks'),
        src: require('./gulp/paths/src'),
        dest: require('./gulp/paths/dest'),
        cssLibs: require('./gulp/paths/cssLibs'),
        jsLibs: require('./gulp/paths/jsLibs')
    },
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    merge: require('merge-stream'),
    buffer: require('vinyl-buffer')
};

$.path.task.map( taskPath => require(taskPath)() );

$.gulp.task('default', $.gulp.series(
    'del',
    $.gulp.parallel(
        'pug',
        'sass',
        'css:libs',
        'js:libs',
        'sprite'
    ),
    $.gulp.parallel(
        'copy',
        'imagemin',
        'html:build',
        'css:build',
        'js:build'
    ),
    $.gulp.parallel(
      'watch',
      'serve'
    )
));