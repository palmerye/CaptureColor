import React, { Component } from 'react'
import style from '../static/main.scss'
import Typed from 'typed.js'

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
    componentDidMount() {
        const typed = new Typed('#typed', {
            strings: [
                '有一天，我们zhizhang的产品经理',
                '有一天，我们可爱的产品经理',
                '有一天，我们帅气的产品经理',
                '有一天，我们可爱帅气的产品经理',
                '有一天，我们可爱帅气的产品经理，提了这样一个exin',
                '有一天，我们可爱帅气的产品经理，提了这样一个棒棒的需求，就是在网页端实现像Photoshop一样的吸色功能。',
                '网页端的吸色功能？ </br> 解析对应DOM元素？图片怎么办？如何精确到像素？解析效率也比较低...',
                '网页端的吸色功能？ </br> 调起客户端工具？用户使用成本较高...',
                '网页端的吸色功能？ </br> 好像有好些Chrome插件有这样的功能呢...但成本也高...',
                '网页端的吸色功能？ </br> emmmmmm...',
                '网页端的吸色功能？ </br> 用Canvas吧...先把当前的HTML转化为Canvas，然后通过canvas解析像素点的信息，拿到颜色...',
                'Bingo！！！',
                '还有，为什么这个网站要搞得这么花里胡哨？因为做人嘛，最重要的是开心！这里写了一篇<a href="https://palmer.arkstack.cn/" target="_blank">文章</a>来记录花里胡哨的过程。'],
            typeSpeed: 80,
            backSpeed: 20,
            loop: false,
            loopCount: Infinity
        })
    }

    render() {
        return (
            <div>
                <div className={style.introduction}>
                    <span ref='typed' id='typed'></span>
                </div>
            </div>
        )
    }
}