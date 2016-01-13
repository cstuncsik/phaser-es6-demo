import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import jsonMinify from 'gulp-json-minify';

gulp.task('data:prod', () => {
    return gulp.src(config.paths.src.data)
        .pipe(jsonMinify())
        .pipe(gulp.dest(config.paths.builds.prod.data))
        .on('error', util.log);
});
