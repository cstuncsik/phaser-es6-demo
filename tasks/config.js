import path from 'path';

export default (() => {

    let cfg = {
        paths: {
            src: {
                root: path.join('src', path.sep)
            },
            builds: {
                root: path.join('builds', path.sep)
            }
        }
    };

    let globs = {
        js: path.join(cfg.paths.src.root, 'js', path.sep),
        img: path.join(cfg.paths.src.root, 'img', '**', '*'),
        data: path.join(cfg.paths.src.root, 'data', '**', '*.json'),
        audio: path.join(cfg.paths.src.root, 'audio', '**', '*')
    };

    Object.keys(globs).forEach(type => cfg.paths.src[type] = globs[type]);

    ['dev', 'prod', 'tmp'].forEach(build => {
        let builds = cfg.paths.builds;
        builds[build] = {};
        builds[build].root = path.join(builds.root, build, path.sep);
    });

    Object.keys(cfg.paths.builds).forEach(buildType => {
        let buildSubDir = cfg.paths.builds[buildType];
        if (typeof buildSubDir !== 'string') {
            Object.keys(globs).forEach(type => buildSubDir[type] = path.join(buildSubDir.root, type, path.sep));
        }
    });

    return cfg;

})();
