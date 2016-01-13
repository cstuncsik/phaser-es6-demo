import path from 'path';

export default (() => {

    let cfg = {
        paths: {
            src: {
                root: path.join('client', path.sep)
            },
            builds: {
                root: path.join('builds', path.sep)
            }
        }
    };

    cfg.globs = {
        js: [path.join(cfg.paths.src.root, 'js', path.sep)],
        css: [path.join(cfg.paths.src.root, 'css', path.sep)],
        img: [path.join(cfg.paths.src.root, 'img', '**', '*')],
        data: [path.join(cfg.paths.src.root, 'data', '**', '*.json')],
        audio: [path.join(cfg.paths.src.root, 'audio', '**', '*')]
    };

    Object.keys(cfg.globs).forEach(type => cfg.paths.src[type] = cfg.globs[type]);

    Object.assign(cfg.paths.builds, {
        dev: {
            root: path.join(cfg.paths.builds.root, 'dev', path.sep)
        },
        prod: {
            root: path.join(cfg.paths.builds.root, 'prod', path.sep)
        },
        tmp: {
            root: path.join(cfg.paths.builds.root, 'tmp', path.sep)
        }
    });

    Object.keys(cfg.paths.builds).forEach(buildType => {
        let buildSubDir = cfg.paths.builds[buildType];
        if (typeof buildSubDir !== 'string') {
            Object.keys(cfg.globs).forEach(type => buildSubDir[type] = path.join(buildSubDir.root, type, path.sep));
        }
    });

    return cfg;

})();
