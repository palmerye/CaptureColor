import React, { Component } from 'react'
import style from '../static/main.scss'
const CaptureColor = require('../static/CaptureColor.umd')
const gif1 = require('../static/image/gif1.gif')
const gif2 = require('../static/image/gif2.gif')
const gif3 = require('../static/image/gif3.gif')

export default class Index extends Component {
    constructor () {
        super()
        this.state = {
            thisColor: ''
        }
    }
    componentDidMount() {
        this.capColor = new CaptureColor({
            el: 'demo'
        })
    }
    
    cap() {
        this.capColor.pickColor()
        .then(res => {
            console.log('所选颜色为', res)
            this.setState({
                thisColor: res
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    render() {
        return (
            <div>
                <div className={style.demo}>
                    <div id='demo' className={style.demoArea}>
                        <div>
                            <h1>DEMO</h1>
                            <h2>DEMO</h2>
                            <h3>DEMO</h3>
                            <h4>DEMO</h4>
                            <h5>DEMO</h5>
                            <h6>DEMO</h6>
                        </div>
                        <div>
                            <img src={gif1}></img>
                            <img src={gif2}></img>
                            <img src={gif3}></img>
                        </div>
                    </div>
                    <button onClick={this.cap.bind(this)}>点击这里吸色</button>
                    <span style={{'background': this.state.thisColor}}>当前色值{this.state.thisColor}，并已存入系统剪切板</span>
                </div>
            </div>
        )
    }
}