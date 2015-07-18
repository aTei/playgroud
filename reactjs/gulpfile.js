var gulp = require("gulp");
var react = require('gulp-react');
var babel = require("gulp-babel");
var coffee = require("gulp-coffee");

gulp.task("react", function () {
    return gulp.src("src/**/*.jsx")
        .pipe(react({harmony: true}))
        .pipe(gulp.dest("./dist"));
});

gulp.task('default', ['react']);
