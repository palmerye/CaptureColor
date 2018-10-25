import 'normalize.css'
import './static/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const CaptureColor = require('./static/CaptureColor.umd')

import Header from './component/header'
import Home from './component/home'
import Go from './component/go'
import Index from './component/Index'

class App extends Component {
    constructor () {
        super()
        this.capColor = new CaptureColor({
            el: 'demo_1'
        })
        this.state = {
            indexPage: 1
        }
        window.addEventListener('hashchange', (e) => {
            this.listenHash()
        })
    }

    componentDidMount () {
        this.listenHash()
    }

    cap () {
        this.capColor.pickColor()
        .then(res => {
            console.log('所选颜色为', res)
        })
        .catch(err => {
            console.error(err)
        })
    }

    letGo() {
        this.setState({
            indexPage: 0
        })
    }
    listenHash() {
        if (this.state.indexPage && location.hash) {
            this.setState({
                indexPage: 0
            })
            setTimeout(() => {
                window.location.href = location.hash
            }, 0);
        }
    }
    render() {
        const state = this.state
        return (
            <div>
                {
                    state.indexPage !== 1 && <Header></Header>
                }
                <CSSTransitionGroup
                transitionName="route"
                transitionEnterTimeout={1}
                transitionLeaveTimeout={3000}>
                    {
                        state.indexPage === 1 ? <Home key={1}></Home> : <Index key={2}></Index>
                    }
                </CSSTransitionGroup>
                {
                    state.indexPage === 1 && <Go letGo={this.letGo.bind(this)}></Go>
                }
            </div>
        )
    }
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))