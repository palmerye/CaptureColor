import React, { Component } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import style from '../static/main.scss'

let introductionText = `const CaptureColor = require('capturecolor')

const capColor = new CaptureColor({
    el: 'app' // 截图对象 DOM 的id, 最好是根节点
})

// 触发截图动作
capColor.pickColor()
.then(res => {
    console.log('所选颜色为', res)
})
.catch(err => {
    console.error(err)
})
`

export default class Index extends Component {
    constructor() {
        super()
    }

    render() {
        let html = Prism.highlight(introductionText, Prism.languages.javascript, 'javascript');
        let cls = 'language-javascript';

        return (
            <div>
                <h1>How To Use</h1>
                <div className={style.codeBlock}>
                    <pre className={cls} data-role='code-root'>
                        <code dangerouslySetInnerHTML={{__html: html}} className={cls}/>
                    </pre>
                </div>
            </div>
        )
    }
}