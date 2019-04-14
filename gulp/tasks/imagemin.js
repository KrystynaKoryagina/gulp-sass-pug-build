'use strict';

module.exports = function() {
    $.gulp.task('imagemin', function() {
        return $.gulp.src([$.path.src.img, `!${$.path.src.sprite}`])
        .pipe($.gp.cache($.gp.imagemin([
            $.gp.imagemin.jpegtran({progressive: true}),
            $.gp.imagemin.optipng({optimizationLevel: 3}),
            $.gp.imagemin.svgo()
        ])))
        .pipe($.gulp.dest($.path.dest.img))
    });
};