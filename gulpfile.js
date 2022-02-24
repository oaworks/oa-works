// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task('css', () => {
  return gulp.src('./src/assets/css/main.scss')
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(cleanCSS({
        debug: true,
        compatibility: 'ie8',
        level: {
            1: {
                specialComments: 0,
            },
        },
    }))
    .pipe(rename({
        basename: 'main'
    }))
    .pipe(gulp.dest('./dist/'))

});

gulp.task("watch", function () {
  gulp.watch("./src/_includes/css/*.scss", gulp.parallel("css"));
});

gulp.task("build", gulp.parallel("css", "watch"));
