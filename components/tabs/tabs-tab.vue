<template>
  <div
    role="tab"
    :aria-disabled="disabled"
    :aria-selected="active"
    :class="classes"
    @click="handleClick">
    <template>{{tab}}</template>
  </div>
</template>


<script>
export default {
  name: 'tabsTab',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Number]
    },
    tab: {
      type: String
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-tab`,
        {
          [`${prefixCls}-tab-disabled`]: this.disabled,
          [`${prefixCls}-tab-active`]: this.active
        }
      ]
    },
    active () {
      return this.index === this.$parent.active
    }
  },
  methods: {
    handleClick (e) {
      !this.active && this.$emit('change', this.index)
      this.$emit('tabClick', {
        e,
        vm: this,
        index: this.index
      })
    }
  }
}
</script>
