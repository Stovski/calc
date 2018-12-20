const gulp = require('gulp');
const scss = require('gulp-scss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browser = require('browser-sync').create();

let SRC_DIR = './src/';
let DIST_DIR = './dist/';
 


gulp.task('scss',  ()=> {
    return gulp.src(SRC_DIR+'scss/*.scss')
        .pipe(sourcemaps.init())

        .pipe(sass())
       
        .pipe(gulp.dest(DIST_DIR + 'css'));
});

gulp.task('watch', function() {
    gulp.watch(SRC_DIR +'scss/main.scss', gulp.series('scss'));
});

gulp.task('serv',  ()=>{
    browser.init ({
        open: true,
        // notify: false,
        server: {
            baseDir: DIST_DIR,
        },
        directory: true,
        startParh:  'html/index.html'
    });
    gulp.watch(DIST_DIR + '**/*.*').on('change', browser.reload);

} );