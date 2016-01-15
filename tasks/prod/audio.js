import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';

gulp.task('audio:prod', () => {
    return gulp.src(config.paths.src.audio)
        .pipe(gulp.dest(config.paths.builds.tmp.audio))
        .on('error', util.log);
});
