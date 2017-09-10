<template>
  <div
    :style="style"
    :class="classList">
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
    span: Number,
    order: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
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
    classList () {
      let res = []

      function mergePropToClassList (list, size, props) {
        Object.keys[props].forEach(prop => {
          list.push(prop === 'span' ? `${this.prefixCls}-${size}-${props[prop]}` : `${this.prefixCls}-${size}-${prop}-${props[prop]}`)
        })
      }

      function isNumber (variable) {
        return typeof variable === 'number'
      }

      function isObject (variable) {
        return typeof variable === 'object'
      }

      ;['span', 'order', 'offset', 'push', 'pull'].forEach(el => {
        this[el] && console.log(el)
        this[el] && res.push(el === 'span' ? `${this.prefixCls}-${this[el]}` : `${this.prefixCls}-${el}-${this[el]}`)
      })

      ;['xs', 'sm', 'md', 'lg', 'xs'].forEach(el => {
        isNumber(el) ? res.push(`${this.prefixCls}-${el}-${this[el]}`)
          : isObject(el) && mergePropToClassList(res, el, this[el])
      })

      return res
    }
  }
}
</script>

<style lang="less">
@import "./style/index";
</style>

