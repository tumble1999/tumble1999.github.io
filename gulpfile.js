require("dotenv").config();
var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass")(require("sass")),
  concat = require("gulp-concat"),
  pipeline = require("readable-stream").pipeline,
  sourcemaps = require("gulp-sourcemaps"),
  prepend = require("gulp-prepend");

function js(cb) {
  return pipeline(
    gulp.src("src/js/*.js"),
    sourcemaps.init(),
    uglify(),
    concat("tumble.min.js"),
    sourcemaps.write({sourceRoot:"/src/js"}),
	prepend(`/**
* Author: Cameron Trow
* License: GPL-3
* Source Code: https://github.com/tumble1999/tumble1999.github.io
* 
* You may copy, distribute and modify the software as long as you
* track changes/dates in source files. Any modifications to or
* software including (via compiler) GPL-licensed code must also
* be made available under the GPL along with build & install
* instructions.
*/
`),
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
	prepend(`/**
* Author: Cameron Trow
* License: GPL-3
* Source Code: https://github.com/tumble1999/tumble1999.github.io
* 
* You may copy, distribute and modify the software as long as you
* track changes/dates in source files. Any modifications to or
* software including (via compiler) GPL-licensed code must also
* be made available under the GPL along with build & install
* instructions.
*/
`),
    gulp.dest("assets/css"),
    cb
  );
}

exports.build = gulp.series(css, js);