const del = require('del');
const glob = require('glob');
const path = require('path');
const babel = require('gulp-babel');
const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const { svgr } = require('@svgr/core');
const gulpSvgr = require('@proscom/gulp-svgr');
const svgo = require('svgo');
const { Transform } = require('stream');
const { writeFile } = require('fs/promises');

const babelrc = require('./babel.config');
const svgoConfig = require('./svgo.config.js');

const SVG_DIR = './src/svg/';
const DIST_DIR = './lib';
const COMPONENTS_DIR = './src/components';
const MIN_DIR = './src/min';

function cleanDist(done) {
    del.sync([DIST_DIR], { force: true });
    done();
}

function cleanComponents(done) {
    del.sync([COMPONENTS_DIR], { force: true });
    done();
}

function cleanAll(done){
    cleanDist(done)
    cleanComponents(done)
    del.sync([MIN_DIR], { force: true });
    done()
}

// 构建库
function buildLib() {
    return gulp
        .src('src/svg/*.svg')
        .pipe(svgoMini(svgoConfig))
        .pipe(
            gulpSvgr({
                svgr: {
                    icon: true,
                    svgoConfig,
                    svgProps: {
                        fill: 'currentColor',
                    },
                    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                },
                createIndex: 'index.js',
                prefix: false,
            }),
        )
        .pipe(babel())
        .pipe(gulp.dest(DIST_DIR));
}

// svgo
function testSvg() {
    return gulp
        .src('src/svg/*.svg')
        .pipe(svgoMini(svgoConfig))
        .pipe(
            gulpSvgr({
                svgr: {
                    icon: true,
                    svgoConfig,
                    svgProps: {
                        fill: 'currentColor',
                    },
                    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                },
                createIndex: 'index.js',
                prefix: false,
            }),
        )
        .pipe(gulp.dest(COMPONENTS_DIR));
}

function optimzeSvg() {
    console.log(svgoConfig);
    return gulp.src('src/svg/*.svg').pipe(svgmin(svgoConfig)).pipe(gulp.dest(COMPONENTS_DIR));
}

//
function svgoMini(options) {
    const optionsFunction = typeof options === 'function';

    const stream = new Transform({ objectMode: true });

    stream._transform = (file, encoding, cb) => {
        if (file.isStream()) {
            return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        if (file.isBuffer()) {
            const result = svgo.optimize(String(file.contents), {
                path: file.path,
                ...options,
            });
            if (typeof result.data === 'string') {
                file.contents = Buffer.from(result.data);
                return cb(null, file);
            }
            throw result.error;
        }

        return cb(null, file);
    };

    return stream;
}

function customSvgo() {
    return gulp.src('src/svg/*.svg').pipe(svgoMini(svgoConfig)).pipe(gulp.dest(MIN_DIR));
}

exports.build = gulp.series(cleanAll, buildLib);

exports.svgo = gulp.series(cleanComponents, testSvg);

exports.min = gulp.series(customSvgo);
