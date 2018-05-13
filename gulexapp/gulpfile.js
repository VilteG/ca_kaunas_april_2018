const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify'); 

/*

-- TOP LEVEL FUNCTIONS--

gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder or output
gulp.watch - Watch files and folders for changes

*/

 // Logs Message

 gulp.task('message', function(){
     return console.log('Gulp is running...')
 });

 // COPY ALL HTML FILES

 gulp.task('copyHtml', function(){
     gulp.src('src/*.html')
     .pipe(gulp.dest('dist'));

 });

 // OPTIMIZE IMAGES

  
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Minify JS

gulp.task('minify', function(){
    gulp.src ('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

} );

 gulp.task('default', function(){
    return console.log('Gulp is running...')
});

 