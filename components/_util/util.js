export const noop = () => {}

// fork from: https://github.com/react-component/rate/blob/54046ad94aeeac826d6d7d84d2e4d511fca704f5/src/util.js

const getScroll = (w, top) => {
  let ret = top ? w.pageYOffset : w.pageXOffset
  const method = top ? 'scrollTop' : 'scrollLeft'
  if (typeof ret !== 'number') {
    const d = w.document
    // ie6,7,8 standard mode
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method]
    }
  }
  return ret
}

const getClientPosition = elem => {
  let box
  let x
  let y
  const doc = elem.ownerDocument
  const body = doc.body
  const docElem = doc && doc.documentElement
  box = elem.getBoundingClientRect()
  x = box.left
  y = box.top
  x -= docElem.clientLeft || body.clientLeft || 0
  y -= docElem.clientTop || body.clientTop || 0
  return {
    left: x,
    top: y
  }
}

export const getOffsetLeft = el => {
  const pos = getClientPosition(el)
  const doc = el.ownerDocument
  const w = doc.defaultView || doc.parentWindow
  pos.left += getScroll(w)
  return pos.left
}

export const assert = (condition, msg) => {
  if (!condition) throw new Error(`[antue] ${msg}`)
}

/**
 * Get element offset width
 * @param {*} node HTMLDOMElemment
 * @return {Number} width
 */
export const getOffsetWidth = (node) => node ? node.offsetWidth : 0
