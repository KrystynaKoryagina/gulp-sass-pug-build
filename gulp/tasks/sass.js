'use strict';

module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src($.path.src.scss)
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError( (error) => { 
                return {
                        title: 'Style',
                        message: error.message
                    }
            }))
            .pipe($.gp.autoprefixer({ 
                browsers: ['cover 99.5%', 'iOS 7'] 
            }))
            .pipe($.gp.cssUnit({
                type: 'px-to-rem',
                rootSize: 16
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.path.dest.scss))
    });
};