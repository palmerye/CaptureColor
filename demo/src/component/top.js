import React, { Component } from 'react'
import style from '../static/main.scss'
import Dropper from './dropper'

export default class Go extends Component {
    top() {
        let timer  = null
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
            let oTop = document.body.scrollTop || document.documentElement.scrollTop
            if(oTop > 0){
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 30
                timer = requestAnimationFrame(fn)
            }else{
                cancelAnimationFrame(timer)
            }    
        })
    }
    render() {
        return (
            <div>
                <div className={style.top} onClick={this.top}>
                    <Dropper></Dropper>
                </div>
            </div>
        )
    }
}