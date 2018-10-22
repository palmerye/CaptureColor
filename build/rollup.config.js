import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser"

export default {
    input: './src/index.js',
    output: [{
        file: './dist/CaptureColor.umd.js',
        format: 'umd',
        name: 'CaptureColor',
        sourceMap: 'inline'
    }, {
        file: './demo/src/CaptureColor.umd.js',
        format: 'umd',
        name: 'CaptureColor',
        sourceMap: 'inline'
    }],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            include: 'node_modules/html2canvas'
        }),
        terser()
    ]
}