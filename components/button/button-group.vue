<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>

const SIZEMAP = {
  'small': 'sm',
  'large': 'lg'
}

export default {
  name: 'buttonGroup',
  props: {
    size: String
  },
  data () {
    return {
      prefixCls: 'ant-btn-group'
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      const size = SIZEMAP[this.size]
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${size}`]: !!this.size
        }
      ]
    }
  }
}
</script>