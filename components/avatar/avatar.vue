<template>
  <span :class="classString">
    <template v-if="src && isImgExist">
      <img :src="src" @error="handleImgLoadError" />
    </template>
    <template v-else-if="icon">
      <Icon :type="icon" />
    </template>
    <template v-else>
      <span ref="childrenNode" :class="`${ prefixCls }--string`" :style="childrenStyle">
        <slot></slot>
      </span>
    </template>
  </span>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'avatar',
  data () {
    return {
      scale: 1,
      isImgExist: true,
      prevChildren: null,
      prevScale: ''
    }
  },
  methods: {
    setScale () {
      const childrenNode = this.$refs.childrenNode
      if (childrenNode) {
        const childrenWidth = childrenNode.offsetWidth
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
    }
  },
  props: {
    className: String,
    icon: String,
    prefixCls: {
      type: String,
      default: 'ant-avatar'
    },
    shape: {
      validator: function (value) {
        const SHAPES = ['circle', 'square']
        return SHAPES.indexOf(value) > -1
      },
      default: 'circle'
    },
    size: {
      validator: function (value) {
        const SIZES = ['large', 'small', 'default']
        return SIZES.indexOf(value) > -1
      },
      default: 'default'
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    childrenStyle () {
      return (this.$refs.childrenNode || this.scale !== 1)
        ? {
          msTransform: `scale(${this.scale})`,
          WebkitTransform: `scale(${this.scale})`,
          transform: `scale(${this.scale})`,
          position: 'absolute',
          display: 'inline-block',
          left: `calc(50% - ${Math.round(this.$refs.childrenNode.offsetWidth / 2)}px)`
        }
        : {}
    },
    sizeCls () {
      return {
        [`${this.prefixCls}-lg`]: this.size === 'large',
        [`${this.prefixCls}-sm`]: this.size === 'small'
      }
    },
    classString () {
      return [
        `${this.prefixCls}`,
        this.sizeCls,
        {
          [`${this.prefixCls}-${this.shape}`]: !!this.shape,
          [`${this.prefixCls}-image`]: !!this.src,
          [`${this.prefixCls}-icon`]: !!this.icon
        }
      ]
    }
  },
  watch: {
    '$refs.childrenNode' (newV, oldV) {
      console.log(newV, oldV)
    },
    'scale' (newV, oldV) {
      console.log(newV, oldV)
    }
  },
  components: {
    Icon
  },
  mounted () {
    this.setScale()
    this.prevChildren = this.$refs.childrenNode
    this.prevScale = this.scale
  },
  updated () {
    console.log('updated')
    let prev = this.prevChildren
    if (prev !== this.$refs.childrenNode || (this.prevScale !== this.scale && this.scale === 1)) {
      this.setScale()
    }
  }
}
</script>
