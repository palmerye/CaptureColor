import React, { Component } from 'react'
import style from '../static/main.scss'

import Dropper from './dropper'

export default class Header extends Component {
    constructor () {
        super()
    }
    render() {
        return (
            <div>
                <div className={style.header}>
                    <div>
                        <a href="/CaptureColor">
                            <h1>CAPTURECOLOR</h1>
                        </a>
                        <Dropper></Dropper>
                    </div>
                    <div className={style.headerList}>
                        <a href="#introduction">Introduction</a>
                        <a href="#demo">Demo</a>
                        <a href="#use">Use It</a>
                        <a href="https://palmer.arkstack.cn/" target="_blank">Blog</a>
                        <a href="https://github.com/palmerye/CaptureColor" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        )
    }
}