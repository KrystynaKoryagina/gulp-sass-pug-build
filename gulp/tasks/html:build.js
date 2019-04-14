'use strict';

module.exports = function () {
    $.gulp.task('html:build', function() {
        return $.gulp.src($.path.src.html)
            .pipe($.gp.htmlmin({
                removeComments: true
            }))
            .pipe($.gulp.dest($.path.dest.root));
    });
};