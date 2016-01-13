import config from '../config.js';
import gulp from 'gulp';
import del from 'del';

gulp.task('clean:dev', () => {
    return del.sync(config.paths.builds.dev.root);
});
