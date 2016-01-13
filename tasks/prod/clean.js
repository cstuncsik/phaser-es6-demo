import config from '../config.js';
import gulp from 'gulp';
import del from 'del';

gulp.task('clean:prod', () => {
    return del.sync([config.paths.builds.tmp.root, config.paths.builds.prod.root]);
});
