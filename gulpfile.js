const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const gzip = require("gulp-gzip");
const cssimport = require('gulp-cssimport');

const paths = {
    styles: "src/styles/_*.css",
    main: "src/styles/main.css",
    dist: "dist/",
    public: "public/assets/"
};

gulp.task("build-css", function () {
    return gulp.src(paths.main)
        .pipe(cssimport())             // Risolve gli import CSS
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(paths.dist))   // Salva il file minificato in dist/
        .pipe(gzip())                  // Gzip il file
        .pipe(gulp.dest(paths.dist));  // Salva il file .gz in dist/
});

// Copia i file CSS minificati anche in public/
gulp.task("copy-to-public", function () {
    return gulp.src(`${paths.dist}style.min.css`)
        .pipe(gulp.dest(paths.public));  // Copia il file gz in public/
});

// Task combinato
gulp.task("default", gulp.series("build-css", "copy-to-public"));
