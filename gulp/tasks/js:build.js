'use strict';

module.exports = function() {
    $.gulp.task('js:build', function() {
        return $.gulp.src($.path.src.js)
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('script.js'))
        .pipe($.gp.uglify())
        .pipe($.gp.rename({suffix: '.min'}))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.path.dest.js))
    });
};







