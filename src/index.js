/*
 * @Author: palmer 
 * @Date: 2018-08-28 11:10:07 
 * @Last Modified by: palmer
 * @Last Modified time: 2018-09-05 11:05:48
 */
import html2canvas from 'html2canvas'
import Clipboard from 'clipboard'
const uuidv4 = require('uuid/v4')

function CaptureColor(option) {
    this.Id = option.el
    this.node = {}
    this.color = ''
}

CaptureColor.prototype.setCanvas_s = function(w=100, h=100) {
    let _canvas = document.createElement('canvas')
    _canvas.id = this.uuid + '-s'
    _canvas.setAttribute('width', w)
    _canvas.setAttribute('height', h)
    _canvas.getContext('2d')
    return _canvas
}

CaptureColor.prototype.setImg = function(dataUrl) {
    let _w = this.node.width
    let _h = this.node.height
    let _img = new Image(_w, _h)
    _img.style.cssText = 'position: absolute;top:0;left:0;right:0;bottom:0;z-index:99999999 !important;'
    _img.crossOrigin = 'Anonymous'
    _img.onload = () => {
        console.log('Image is loaded')
    }
    _img.src = dataUrl || ''

    document.body.appendChild(_img)
}

CaptureColor.prototype.transformToImg = function(node) {
    html2canvas(node, {
        useCORS: true
    }).then(data => {
        let _data = data
        _data.id = this.uuid
        _data.style.cssText = 'position: absolute;top:0;left:0;right:0;bottom:0;z-index:11111111 !important;'
        document.body.appendChild(_data)

        let _canvas = _data.getContext('2d')
        let _canvas_s = document.getElementById(this.uuid + '-s').getContext('2d')
        let _canvas_info = document.getElementById(this.uuid + '-info')
        let _canvas_all = document.getElementById(this.uuid + '-div')
        
        // 注册canvas hover事件, 获取光标
        _data.onmousemove = (coordinate) => {
            _canvas_s.putImageData(_canvas.getImageData(coordinate.x - 50, coordinate.y - 50, 100, 100), 0, 0)
            let _color = this.RgbToHex(_canvas_s.getImageData(50, 50, 1, 1).data.slice(0, 3).toString())
            _canvas_info.getElementsByTagName('p')[0].innerText = `(${coordinate.x}, ${coordinate.y})`
            _canvas_info.getElementsByTagName('p')[1].getElementsByTagName('i')[0].style.backgroundColor = _color
            _canvas_info.getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerText = `${_color}`
            _canvas_all.style.top = (coordinate.y < _data.clientTop + _data.height - 150 ? coordinate.y + 15 : coordinate.y - 150 - 15) + 'px'
            _canvas_all.style.left = (coordinate.x < _data.clientLeft + _data.width - 150 ? coordinate.x + 15 : coordinate.x - 100 - 15) + 'px'
            this.color = _color
        }
        
        _data.onclick = () => {
            document.getElementById(this.uuid + '-info-btn').click()
            this.reset()
        }
    })
    .catch(error => {
        console.error(error)
    })
}

CaptureColor.prototype.RgbToHex = function(value) {
    let color = value.replace(/[^\d,]/g, '').replace(/(\d+)/g, function(s, s1) {
        let v = parseInt(s1).toString(16)
        return v.length == 1 ? '0'+ v : v
    })
    return '#' + color.replace(/,/g, '').toUpperCase()
}

CaptureColor.prototype.infoShow = function(value) {
    let _div = document.createElement('div')
    _div.id = this.uuid + '-info'
    _div.style.cssText = 'font-size:12px;color:#fff;text-align:center;background: rgba(0, 0, 0, 0.8)'
    let _info =
    `<p style="margin:0;">(x, y)</p>
    <p style="margin:0;"><i style="display: inline-block;width:10px;height:10px;"></i> <span id="${this.uuid + 'color'}"></span></p>
    <p style="margin:0;">按 c 复制颜色值</p>
    <a id="${_div.id + '-btn'}" class="${_div.id + '-btn'}" href="javascript:" style="display:block;height:0;overflow: hidden;" data-clipboard-target="#${this.uuid + 'color'}">复制</a>
    <span>
        <i style="position:absolute;top:50px;left:45px;width:11px;height:0.5px;background:red;display:inline-block;box-shadow: 0 0 1px #fff;"></i>
        <i style="position:absolute;top:45px;left:50px;width:0.5px;height:11px;background:red;display:inline-block;box-shadow: 0 0 1px #fff;"></i>
    </span>`
    _div.innerHTML = _info
    return _div
}

CaptureColor.prototype.keyListener = function(e) {
    if (e.keyCode === 67) {
        document.getElementById(this.uuid + '-info-btn').click()
        document.getElementById(this.uuid + '-div').style['box-shadow'] = '0px 0px 10px yellow'
        setTimeout(() => {
            document.getElementById(this.uuid + '-div').style['box-shadow'] = '0px 0px 5px #fff'
        }, 500)
    }
}

CaptureColor.prototype.Exit = function (e) {
    if (e.keyCode === 27) {
        this.reset()
    }
}

CaptureColor.prototype.reset = function() {
    let _canvas = document.getElementById(this.uuid)
    let _canvas_div = document.getElementById(this.uuid + '-div')

    let _canvas_p = _canvas.parentElement
    let _canvas_div_p = _canvas_div.parentElement

    _canvas_p.removeChild(_canvas)
    _canvas_div_p.removeChild(_canvas_div)
    this.uuid = ''
    this.clipboard.destroy()
    this.clipboard = null
    document.removeEventListener('keydown', this.keyListener, false)
    document.removeEventListener('keydown', this.Exit, false)
}

CaptureColor.prototype.pickColor = function() {
    this.uuid = 'cc' + uuidv4().split('-')[0]
    this.node = document.getElementById(this.Id)
    this.transformToImg(this.node)
    let canvas_s = this.setCanvas_s()

    let _div = document.createElement('div')
    _div.id = this.uuid + '-div'
    _div.style.cssText = 'display:inline-block;position:absolute;font-size: 0;box-shadow: 0 0 5px #fff;z-index:99999999 !important'
    _div.appendChild(canvas_s)
    _div.appendChild(this.infoShow())
    document.body.appendChild(_div)
    
    document.addEventListener('keydown', this.keyListener.bind(this))
    document.addEventListener('keydown', this.Exit.bind(this))

    this.clipboard = new Clipboard(document.getElementById(this.uuid + '-info-btn'))
    this.clipboard.on('success', function (e) {
        console.log('成功复制至剪切板', e.text)
        e.clearSelection()
    })
    this.clipboard.on('error', function (e) {
    })
}

export default CaptureColor
