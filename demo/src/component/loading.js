import React, { Component } from 'react'
import style from '../static/main.scss'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <div className={style.loading}></div>
            </div>
        )
    }
}