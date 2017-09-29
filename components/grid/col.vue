<template>
  <div
    :style="style"
    :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prefixCls: 'ant-col'
    }
  },
  props: {
    span: [Number, String],
    order: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    push: {
      type: [Number, String],
      default: 0
    },
    pull: {
      type: [Number, String],
      default: 0
    },
    xs: [Number, String, Object],
    sm: [Number, String, Object],
    md: [Number, String, Object],
    lg: [Number, String, Object],
    xl: [Number, String, Object]
  },
  computed: {
    gutter () {
      return this.$parent.gutter
    },
    style () {
      let ret = {}
      if (this.gutter) {
        ret.paddingLeft = this.gutter / 2 + 'px'
        ret.paddingRight = ret.paddingLeft
      }
      return ret
    },
    classes () {
      let res = []

      const mergePropToClassList = (list, size, props) => {
        Object.keys(props).forEach(prop => {
          list.push(prop === 'span' ? `${this.prefixCls}-${size}-${props[prop]}` : `${this.prefixCls}-${size}-${prop}-${props[prop]}`)
        })
      }

      const isNumber = (variable) => {
        return typeof variable === 'number' || typeof variable === 'string'
      }

      const isObject = (variable) => {
        return typeof variable === 'object'
      }

      ;['span', 'order', 'offset', 'push', 'pull'].forEach(el => {
        this[el] && res.push(el === 'span' ? `${this.prefixCls}-${this[el]}` : `${this.prefixCls}-${el}-${this[el]}`)
      })

      ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(el => {
        const value = this[el]
        value && (isNumber(value) ? res.push(`${this.prefixCls}-${el}-${value}`)
          : isObject(value) && mergePropToClassList(res, el, value))
      })

      return res
    }
  }
}
</script>

