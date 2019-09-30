'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./app/style/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./app/style/css/*.css', $.gulp.series('css:build'));
    $.gulp.watch('./app/template/*.pug', $.gulp.series('pug')); 
    $.gulp.watch('./app/*.html', $.gulp.series('html:build'));
    $.gulp.watch('./app/js/*.js', $.gulp.series('js:build'));  
    $.gulp.watch('./app/img/**/**/*', $.gulp.series('imagemin'));
    $.gulp.watch('./app/img/sprite/png/*.png', $.gulp.series('sprite'));
    $.gulp.watch('./app/img/sprite/svg/*.svg', $.gulp.series('sprite:svg')); 
    $.gulp.watch(['./app/fonts/*','./app/js/libs/*'], $.gulp.series('copy'));
  });
};