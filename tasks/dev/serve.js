import config from '../config.js';
import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('serve', () => {
    browserSync({
        server: {
            baseDir: config.paths.builds.dev.root,
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
});
