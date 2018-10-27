import React, { Component } from 'react'
import style from '../static/main.scss'
import sr from './sr'

export default class Index extends Component {
    componentDidMount () {
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
        sr.reveal(this.refs.title, config)
        sr.reveal(this.refs.badges, {
            origin: 'bottom',
            duration: 1000,
            delay: 150,
            distance: '15rem',
            scale: 1,
            easing: 'ease'
        })
    }
    render() {
        return (
            <div>
                <div className={style.home} >
                    <h1 ref='title'>CaptureColor</h1>
                    <div ref='badges'>
                        <a href="https://github.com/palmerye/CaptureColor" target="_blank">
                            <img src="https://img.shields.io/travis/palmerye/CaptureColor.svg?style=for-the-badge&colorB=ee3434"></img>
                        </a>
                        <a href="https://github.com/palmerye/CaptureColor" target="_blank">
                            <img src="https://img.shields.io/github/stars/palmerye/CaptureColor.svg?style=for-the-badge&label=Stars&colorB=ee3434"></img>
                        </a>
                        <a href="https://github.com/palmerye/CaptureColor" target="_blank">
                            <img src="https://img.shields.io/npm/dt/capturecolor.svg?style=for-the-badge&colorB=e99e12"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}