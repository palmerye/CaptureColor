# CaptureColor

[![NPM](https://nodei.co/npm/capturecolor.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/capturecolor/)

![GitHub release](https://img.shields.io/github/release/palmerye/CaptureColor.svg)

> 吸取网页任意位置的颜色，类似 Photoshop 里的吸管工具

## install

```
npm i capturecolor --save
```

## use

```
const CaptureColor = require('capturecolor')

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
```
