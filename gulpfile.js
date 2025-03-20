const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

// Definisci il task per concatenare e minificare i CSS
gulp.task('styles', () => {
    return gulp.src('src/style/*.css') // Prendi tutti i file CSS nella cartella src/style/
        .pipe(concat('picco.min.css'))   // Concatenate tutti i CSS in un unico file styles.min.css
        .pipe(cssnano())                 // Minifica il CSS
        .pipe(gulp.dest('dist/'));        // Salva il file minificato nella cartella dist/
});

// Esegui il task di default quando viene invocato gulp
gulp.task('default', gulp.series('styles'));
