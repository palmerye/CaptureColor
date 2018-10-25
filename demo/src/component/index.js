import React, { Component } from 'react'
import style from '../static/main.scss'
import sr from './sr'

import Introduction from './introduction'
import Demo from './demo'
import Use from './useIt'
import Top from './top'

export default class Index extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const config = {
            reset: true,
            origin: 'top',
            duration: 1000,
            delay: 150,
            distance: '10rem',
            scale: 1,
            easing: 'ease',
            beforeReveal: function(domEl){
                console.log('动画执行了');
            },
            //鼠标滚轮滚动之前会被触发
            beforeReset: function(domEl){
                console.log('滚轮开始---');
            },
            //动画开始之后会被触发
            afterReveal: function(domEl){
                console.log('动画结束了');
            },
            //滚轮滚动之后会被触发
            afterReset: function(domEl){
                console.log('滚轮结束了');
            }
        }
        sr.reveal(this.refs.introduction, config)
        sr.reveal(this.refs.demo, config)
        sr.reveal(this.refs.use, config)
        console.log(this.refs)
    }

    render() {
        return (
            <div>
                <div className={style.introduction}>
                    <a name="introduction" style={{opacity: 0}}></a>
                    <Introduction ref="introduction"></Introduction>
                    
                    <a name="demo" style={{opacity: 0}}></a>
                    <Demo ref="demo"></Demo>

                    <a name="use" style={{opacity: 0}}></a>
                    <Use ref="use"></Use>
                </div>
                <Top></Top>
            </div>
        )
    }
}