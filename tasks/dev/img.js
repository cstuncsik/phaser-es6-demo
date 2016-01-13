import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';

gulp.task('img:dev', () => {
    return gulp.src(config.paths.src.img)
        .pipe(gulp.dest(config.paths.builds.dev.img))
        .on('error', util.log);
});
