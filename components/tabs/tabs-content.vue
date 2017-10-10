<template>
  <div :class="classes">
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
