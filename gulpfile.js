const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('inline-build-templates', () => {
  return gulp.src(['./src/app/ks-currency-mask/**/*.ts', '!./src/app/ks-currency-mask/**/**.spec.ts'])
    .pipe(inlineNg2Template({
      target: 'es5',
      useRelativePaths: true
    }))
    .pipe(gulp.dest('./build'));

});

