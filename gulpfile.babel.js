// SASS configuration
import { src, dest, watch } from 'gulp';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css'

export const styles = () => {
    return src('scss/application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(dest('./files'));
}

export const watchForChanges = () => {
    watch('scss/**/*.scss', styles);
}

export const dev = watchForChanges;
export default dev;