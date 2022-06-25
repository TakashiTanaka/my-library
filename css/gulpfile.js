const { src, dest, watch, series } = require('gulp');
const gulpDartSass = require('gulp-dart-sass');
const sassGlob = require('gulp-sass-glob-use-forward');
const browserSync = require('browser-sync').create();

const server = () =>
  browserSync.init({
    server: {
      baseDir: './',
    },
		watch: true,
  });

const buildSass = () =>
  src('sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(
      gulpDartSass({
        outputStyle: 'expanded',
      })
    )
    .pipe(dest('dist'));

const watchSass = () => watch(['sass/**/*', 'index.html'], buildSass);

exports.server = server;
exports.watchSass = watchSass;
exports.buildSass = buildSass;
