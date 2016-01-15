import gulp from 'gulp';
import sequence from 'run-sequence';
import requireDir from 'require-dir';

// Require production tasks
requireDir('./tasks/prod');

// Initiate production tasks
gulp.task('build', () => {
    sequence('clean:prod',
        [
            'audio:prod',
            'data:prod',
            'img:prod',
            'js:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});

// Require development tasks
requireDir('./tasks/dev');

// Initiate development tasks
gulp.task('default', () => {
    sequence('clean:dev',
        [
            'audio:dev',
            'data:dev',
            'img:dev',
            'js:dev',
            'html:dev'
        ],
        'watch',
        'serve'
    );
});
