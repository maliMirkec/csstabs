var gulp = require('gulp');
var sass = require('gulp-sass');
var bump = require('gulp-bump');

gulp.task('sass', function () {
  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./*.scss', ['sass']);
});

// Will patch the version
gulp.task('bump-patch', function(){
    gulp.src(['./package.json', 'bower.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

// Will patch the version
gulp.task('bump-minor', function(){
    gulp.src(['./package.json', 'bower.json'])
    .pipe(bump({
        type: 'minor'
    }))
    .pipe(gulp.dest('./'));
});

// Will patch the version
gulp.task('bump-major', function(){
    gulp.src(['./package.json', 'bower.json'])
    .pipe(bump({
        type: 'major'
    }))
    .pipe(gulp.dest('./'));
});
