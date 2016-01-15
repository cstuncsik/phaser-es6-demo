import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import imagemin from 'gulp-imagemin';

gulp.task('img:prod', () => {
    return gulp.src(config.paths.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.builds.tmp.img))
        .on('error', util.log);
});
