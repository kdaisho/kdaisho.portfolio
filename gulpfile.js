'use strict';

var   gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
      sass = require("gulp-sass"),
      maps = require("gulp-sourcemaps"),
       del = require("del"),
 uglifycss = require("gulp-uglifycss");

gulp.task("concatScripts", function() {
  return gulp.src(["js/jquery.js",
            "js/functions.js",
            "js/data.js"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
    .pipe(maps.init())
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("js"));
});

gulp.task("compileSass", function() {
  return gulp.src("scss/styles.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("css"));
});

gulp.task("minifyCss", ["compileSass"], function() {
  return gulp.src("css/styles.css")
    .pipe(uglifycss())
    .pipe(gulp.dest("css"));
});

gulp.task("watchFiles", function() {
  gulp.watch("scss/**/*.scss", ["compileSass"]);
  gulp.watch(["js/functions.js", "js/jquery.js", "js/data.js"], ["minifyScripts"])// This was concatScripts instead of minifyScripts
});

gulp.task("clean", function() {
  del(["dist", "css/styles.css*", "js/app*.js*"]);
})

gulp.task("build", ["minifyScripts", "compileSass", "minifyCss"], function() {
  return gulp.src(["css/styles.css", "js/app.min.js", "index.html",
    "images/**"], { base: "./"})
    .pipe(gulp.dest("dist"));
});

gulp.task("dev", ["watchFiles"]);

gulp.task("default", ["clean"], function() {
  gulp.start("build");
});