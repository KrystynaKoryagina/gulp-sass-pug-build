'use strict';

module.exports = function () {
    $.gulp.task('pug', function() {
        return $.gulp.src($.path.src.pug)
            .pipe($.gp.plumber())
            .pipe($.gp.pug({
                pretty: true
            }))
            .on('error', $.gp.notify.onError( (error) => { 
                return {
                        title: 'Pug',
                        message: error.message
                    }
            }))
            .pipe($.gulp.dest($.path.dest.pug));
    });
};