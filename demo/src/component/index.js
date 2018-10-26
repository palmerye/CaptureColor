import React, { Component } from 'react'
import style from '../static/main.scss'
import sr from './sr'

import Introduction from './introduction'
import Demo from './demo'
import Use from './useIt'
import Top from './top'

const csImg1 = require('../static/image/camera.svg')
const csImg2 = require('../static/image/chucks.svg')
const csImg3 = require('../static/image/film.svg')
const csImg4 = require('../static/image/hat.svg')
const csImg5 = require('../static/image/photography.svg')

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
    }

    render() {
        return (
            <div>
                <div className={style.introduction}>
                    <img src={csImg1} className={style.csImg1}/>
                    <img src={csImg2} className={style.csImg2}/>
                    <img src={csImg3} className={style.csImg3}/>
                    <img src={csImg4} className={style.csImg4}/>
                    <img src={csImg5} className={style.csImg5}/>

                    <a name="introduction" style={{'position': 'relative'}}>
                        <h1 className={style.in_title} data-heading="- INTRODUCTION -">- INTRODUCTION -</h1>
                    </a>
                    <Introduction ref="introduction"></Introduction>
                    
                    <a name="demo" style={{'position': 'relative'}}>
                        <h1 className={style.in_title} data-heading="- DEMO -">- DEMO -</h1>
                    </a>
                    <Demo ref="demo"></Demo>

                    <a name="use" style={{'position': 'relative'}}>
                        <h1 className={style.in_title} data-heading="- USE IT -">- USE IT -</h1>
                    </a>
                    <Use ref="use"></Use>
                </div>
                <Top></Top>
            </div>
        )
    }
}