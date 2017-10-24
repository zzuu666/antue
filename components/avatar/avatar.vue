<template>
  <span :class="classes">
    <img v-if="src && isImgExist" :src="src" @error="handleImgLoadError" />
    <Icon v-else-if="icon" :type="icon" />
    <span v-else ref="children" :class="`${ prefixCls }-string`" :style="childrenStyle">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import Icon from '../icon'
import { oneOf } from '../_util/proptype'

const SIZEMAP = {
  'small': 'sm',
  'large': 'lg'
}

export default {
  name: 'avatar',
  props: {
    icon: String,
    prefixCls: {
      type: String,
      default: 'ant-avatar'
    },
    shape: {
      validator: function (value) {
        return oneOf(value, ['circle', 'square'])
      },
      default: 'circle'
    },
    size: {
      validator: function (value) {
        return oneOf(value, ['large', 'small', 'default'])
      },
      default: 'default'
    },
    src: {
      type: String
    }
  },
  data () {
    return {
      scale: 1,
      isImgExist: true,
      offsetWidth: 0
    }
  },
  computed: {
    childrenStyle () {
      return {
        transform: `scale(${this.scale})`,
        position: 'absolute',
        display: 'inline-block',
        left: `calc(50% - ${Math.round(this.offsetWidth / 2)}px)`
      }
    },
    classes () {
      const prefixCls = this.prefixCls
      const size = this.size && SIZEMAP[this.size]
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${size}`]: !!size,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-image`]: !!this.src,
          [`${prefixCls}-icon`]: !!this.icon
        }
      ]
    }
  },
  components: {
    Icon
  },
  methods: {
    setScale () {
      const childrenNode = this.$refs.children
      if (childrenNode) {
        // scale can`t affect offsetWidth, but affect actual size（or computed size）
        const childrenWidth = this.offsetWidth
        const avatarWidth = this.$el.getBoundingClientRect().width

        if (avatarWidth - 8 < childrenWidth) {
          this.scale = (avatarWidth - 8) / childrenWidth
        } else {
          this.scale = 1
        }
      }
    },
    handleImgLoadError () {
      this.isImgExist = false
    },
    updateOffSetWidth () {
      this.offsetWidth = this.$refs.children && this.$refs.children.offsetWidth
    }
  },
  mounted () {
    this.updateOffSetWidth()
    this.setScale()
  },
  updated () {
    this.updateOffSetWidth()
    this.setScale()
  }
}
</script>
