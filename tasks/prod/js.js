import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';

gulp.task('js:prod', () => {
    return browserify(config.paths.src.js + 'game.js', {debug: true})
        .transform('babelify', {
            presets: ['es2015'],
            plugins: ['transform-es5-property-mutators', 'transform-object-assign']
        })
        .bundle()
        .on('error', util.log)
        .pipe(source('game.js'))
        .pipe(buffer())
        .pipe(gulp.dest(config.paths.builds.tmp.js))
});
