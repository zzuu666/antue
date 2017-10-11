<template>
  <div
    :class="classes"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabsContent',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    active: {
      type: [String, Number]
    },
    activeIndex: {
      type: Number
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls

      return [
        `${prefixCls}-content`,
        this.animated ? `${prefixCls}-content-animated` : `${prefixCls}-content-no-animated`
      ]
    },
    style () {
      const marginLeft = this.activeIndex > -1 ? this.activeIndex * 100 : 0
      const style = {
        marginLeft: `-${marginLeft}%`
      }
      return style
    }
  },
  methods: {
    panes () {
      return this.$children.filter(item => item.$options.name === 'pane')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$emit('panes', this.panes())
    })
  }
}
</script>
