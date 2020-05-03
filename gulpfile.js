const gulp = require("gulp");
const ts = require("gulp-typescript");
const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');

gulp.task('default', function () {
    return roComple();
})


function roComple() {
    return rollup.rollup({
        input: './src/main.ts',
        treeshake: true,//建议忽略
        plugins: [
            typescript({
                check: false,
                clean:true,
                tsconfigOverride: { compilerOptions: { removeComments: true } }
            }),

        ]
    }).then(bundle => {
        return bundle.write({
            file: './dist/bundle.js',
            format: 'iife',
            name: 'mygame',
            sourcemap: true 
        });
    });
}
