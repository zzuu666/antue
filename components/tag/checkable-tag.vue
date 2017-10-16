<template>
  <div
    :class="classes"
    @click="toggle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'checkableTag',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tag'
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        `${prefixCls}-checkable`,
        {
          [`${prefixCls}-checkable-checked`]: this.checked
        }
      ]
    }
  },
  methods: {
    toggle () {
      const checked = !this.checked
      this.$emit('change', checked)
    }
  }
}
</script>
