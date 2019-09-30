'use strict';

module.exports = function() {
    $.gulp.task('css:build', function() {
        return $.gulp.src($.path.src.css)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.concat('style.css'))
            .pipe($.gp.csso())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.path.dest.css));
    });
};