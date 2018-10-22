import React, { Component } from 'react'
import style from '../static/main.scss'

export default class Go extends Component {
    letGo() {
        this.props.letGo()
    }
    render() {
        return (
            <div>
                <div className={style.go}>
                    <div>
                        <span onClick={this.letGo.bind(this)}>Let's Go!</span>
                    </div>
                </div>
            </div>
        )
    }
}