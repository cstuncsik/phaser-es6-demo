import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';

gulp.task('js:dev', () => {
    return browserify(config.paths.src.js + 'game.js', {debug: true})
        .transform('babelify', {
            presets: ['es2015'],
            plugins: ['transform-es5-property-mutators', 'transform-object-assign']
        })
        .bundle()
        .on('error', function (error) {
            util.log(util.colors.red(error));
            this.emit('end');
        })
        .pipe(source('game.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.builds.dev.js))
});
