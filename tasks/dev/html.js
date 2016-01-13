import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';

gulp.task('html:dev', () => {
    return gulp.src(config.paths.src.root + 'index.html')
        .pipe(gulp.dest(config.paths.builds.dev.root))
        .on('error', util.log);
});
