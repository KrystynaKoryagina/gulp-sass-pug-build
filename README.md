# Gulp build PUG + SCSS

![Image of Gulp build](https://miro.medium.com/max/600/1*riaSTUNDrUA8r9m1X-WjnA.png)

### Install
- install [Node.js](https://nodejs.org/) to use Gulp 4

 Using  Windows `cmd` or Linux/macOS `Terminal`:
- install the gulp command line utility: `$ npm install --global gulp-cli`
- clone the repository `$ git clone https://github.com/KrystynaKoryagina/gulp-sass-pug-build.git`
- go to the folder `$ cd gulp-sass-pug-build`
- install packages from package.json: `$ npm i`

### Gulp plugins
  - `gulp-load-plugins` - loads Gulp plugins from package dependencies and attaches them to an object
  - `gulp-sass` - Gulp plugin for compiling SASS/SCSS templates
  - `gulp-pug` - Gulp plugin for compiling PUG templates
  - `gulp-htmlmin` - Gulp plugin to minify HTML
  - `gulp-csso` - Gulp plugin to minify CSS
  - `gulp-sass-glob` - Gulp plugin to use glob imports in sass/scss files
  - `gulp-sourcemaps` - source map support for Gulp.js
  - `gulp-concat` - concatenates files
  - `gulp-rename` - rename files
  - `gulp-autoprefixer` - prefix CSS
  - `gulp-css-unit` - css unit converter
  - `gulp-imagemin` - minify PNG, JPEG, GIF and SVG images
  - `gulp-uglify` - minify files with UglifyJS
  - `gulp.spritesmith` - convert a set of images into a spritesheet and CSS variables via gulp
  - `gulp-svg-sprite` - Gulp plugin wrapping around svg-sprite that reads in a bunch of SVG files, optimizes them and creates SVG sprites and CSS resources in various flavours
  - `gulp-svgmin` - minify SVG files with gulp
  - `gulp-plumber` - prevent pipe breaking caused by errors from gulp plugins
  - `gulp-notify` - Gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module
  - `del` - delete files and directories
  - `browser-sync` - live CSS Reload & Browser Syncing

### Libraries
This Gulp build includes:
- `Bootstrap` 
    ```
        bootstrap.min.js
        bootstrap.css
    ```
- `jQuery`
    ```
        jquery.min.js
    ```
- `Normalize.css` 
- `Animate.css` 

All *third-party libraries* are installed in the `node_modules` folder.
- install library via npm:  `$ npm install package_name --save` and add path to the array `gulp/paths/cssLibs.js` for CSS or `gulp/paths/jsLibs.js` for JS
- uninstall library via npm:  `$ npm uninstall package_name -S` and delete path from the array `gulp/paths/cssLibs.js` for CSS or `gulp/paths/jsLibs.js` for JS