require("dotenv").config();
var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass")(require("sass")),
  concat = require("gulp-concat"),
  pipeline = require("readable-stream").pipeline,
  sourcemaps = require("gulp-sourcemaps");

function js(cb) {
  return pipeline(
    gulp.src("src/js/*.js"),
    sourcemaps.init(),
    uglify(),
    concat("tumble.min.js"),
    sourcemaps.write({sourceRoot:"/src/js"}),
    gulp.dest("assets/js"),
    cb
  );
}

function css(cb) {
  return pipeline(
    gulp.src("src/scss/main.scss"),
    sourcemaps.init(),
    sass({ outputStyle: "compressed" }).on("error", sass.logError),
    concat("tumble.min.css"),
    sourcemaps.write({sourceRoot:"/src/scss"}),
    gulp.dest("assets/css"),
    cb
  );
}

exports.build = gulp.series(css, js);