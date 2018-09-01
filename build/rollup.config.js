import babel from 'rollup-plugin-babel'

export default {
    input: './src/index.js',
    output: [{
        file: './dist/CaptureColor.umd.js',
        format: 'umd',
        name: 'CaptureColor',
        sourceMap: 'inline'
    }],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            include: 'node_modules/html2canvas'
        })
    ]
}
