'use strict'

module.exports = function() {
    $.gulp.task('sprite', function() {
        
        let spriteData = $.gulp.src($.path.src.sprite)
            .pipe($.gp.spritesmith({ 
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: 'css',
                imgPath: '../img/sprite/',
                padding: 20
            }));

        let imgStream = spriteData.img
            .pipe($.buffer())
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.path.dest.spriteImg));

        let cssStream = spriteData.css
            .pipe($.gulp.dest($.path.dest.spriteCss));

        return $.merge(imgStream, cssStream);
    });    
};


