import { oneOf } from '../_util/proptype'
import Normal from './normal'
import Collapse from './collapse'

export default {
  name: 'transition',
  functional: true,
  render (h, ctx) {
    const attrs = ctx.data.attrs
    const type = attrs.type
    // todo tips
    const motion = (type) => {
      return oneOf(type, ['fade', 'move', 'slide', 'swing', 'zoom']) ? new Normal(attrs)
        : oneOf(type, ['collapse']) ? new Collapse()
          : {}
    }
    const data = Object.assign({}, ctx.data, motion(type))
    return h('transition', data, ctx.children)
  }
}
