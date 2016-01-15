import config from '../config.js';
import gulp from 'gulp';
import RevAll from 'gulp-rev-all';
import util from 'gulp-util';

gulp.task('rev:prod', () => {

    let revAll = new RevAll({ dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g] });

    return gulp.src(config.paths.builds.tmp.root + '**')
        .pipe(gulp.dest(config.paths.builds.tmp.root))
        .pipe(revAll.revision())
        .pipe(gulp.dest(config.paths.builds.prod.root))
        .on('error', util.log);
});
