import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';

gulp.task('data:dev', () => {
    return gulp.src(config.paths.src.data)
        .pipe(gulp.dest(config.paths.builds.dev.data))
        .on('error', util.log);
});
