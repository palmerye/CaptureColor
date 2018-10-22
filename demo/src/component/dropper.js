import React, { Component } from 'react'
import style from '../static/main.scss'

export default class Go extends Component {
    componentDidMount() {
        this.ctx = this.refs.dropper.getContext('2d')
        init(this.ctx)
        function init(ctx) {
            drawHead(ctx)
            drawBody(ctx)
            drawLine(ctx, 58, 77, 10, 5)
            drawLine(ctx, 58, 89, 10, 5)
            drawLine(ctx, 58, 101, 10, 5)
            drawLine(ctx, 42, 50, 42, 14)
            drawLine(ctx, 42, 50, 42, 8, '#f46864')
        }

        function drawHead(ctx) {
            ctx.save()
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.moveTo(45, 50)
            ctx.lineTo(45, 22)
            ctx.arc(63, 22, 18, Math.PI, Math.PI * 2)
            ctx.lineTo(81, 50)
            ctx.closePath()
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = '#f46864'
            ctx.moveTo(47, 50)
            ctx.lineTo(47, 22)
            ctx.arc(63, 22, 16, Math.PI, Math.PI * 2)
            ctx.lineTo(79, 50)
            ctx.closePath()
            ctx.fill()

            drawLine(ctx, 53, 25, 4, 8)
            drawLine(ctx, 54, 25, 2, 4, '#fff')
            drawLine(ctx, 69, 25, 4, 8)
            drawLine(ctx, 70, 25, 2, 4, '#fff')

            ctx.beginPath()
            ctx.arc(55, 25, 1, 0, 360, false)
            ctx.fillStyle = '#000'
            ctx.fill()
            ctx.closePath()

            ctx.beginPath()
            ctx.arc(71, 25, 1, 0, 360, false)
            ctx.fill()
            ctx.closePath()

            ctx.restore()
        }

        function drawBody(ctx) {
            ctx.save()
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.moveTo(50, 50)
            ctx.lineTo(50, 110)
            ctx.lineTo(60, 120)
            ctx.lineTo(60, 145)
            ctx.lineTo(66, 145)
            ctx.lineTo(66, 120)
            ctx.lineTo(76, 110)
            ctx.lineTo(76, 50)
            ctx.closePath()
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = '#fff'
            ctx.moveTo(52, 49)
            ctx.lineTo(52, 110)
            ctx.lineTo(62, 120)
            ctx.lineTo(62, 144)
            ctx.lineTo(64, 144)
            ctx.lineTo(64, 120)
            ctx.lineTo(74, 110)
            ctx.lineTo(74, 49)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }

        function drawLine(ctx, x, y, l, h, color) {
            ctx.save()
            ctx.beginPath()
            ctx.lineWidth = h || 6
            ctx.lineCap = 'round'
            ctx.strokeStyle = color || ''
            ctx.moveTo(x, y)
            ctx.lineTo(x + l, y)
            ctx.stroke()
            ctx.restore()
        }
    }

    render() {
        return (
            <div className={style.dropper}>
                <div>
                    <canvas ref='dropper' width="150" height="150"></canvas>
                </div>
            </div>
        )
    }
}