import config from '../config.js';
import gulp from 'gulp';

gulp.task('watch', () => {
    gulp.watch(config.paths.src.js + '**/*.js', ['js:dev']);
    gulp.watch(config.paths.src.img, ['img:dev']);
    gulp.watch(config.paths.src.data, ['data:dev']);
    gulp.watch(config.paths.src.audio, ['audio:dev']);
    gulp.watch(config.paths.src.root + '**/*.html', ['html:dev']);
});
