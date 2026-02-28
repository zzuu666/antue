<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'atu-collapse',
    props: {
      activeKey: {
        type: [Array, String],
        default: undefined
      },
      defaultActiveKey: {
        type: Array,
        default () {
          return []
        }
      },
      accordion: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: true
      },
      prefixCls: {
        type: String,
        default: 'ant-collapse'
      }
    },
    data () {
      return {
        currentActiveKey: this.activeKey
          ? [].concat(this.activeKey)
          : [].concat(this.defaultActiveKey)
      }
    },
    provide () {
      return {
        collapse: this
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-borderless`]: !this.bordered
          }
        ]
      }
    },
    watch: {
      activeKey (val) {
        this.currentActiveKey = [].concat(val)
      }
    },
    methods: {
      handlePanelClick (key) {
        let activeKey = [].concat(this.currentActiveKey)
        if (this.accordion) {
          activeKey = activeKey[0] === key ? [] : [key]
        } else {
          const index = activeKey.indexOf(key)
          if (index > -1) {
            activeKey.splice(index, 1)
          } else {
            activeKey.push(key)
          }
        }
        this.currentActiveKey = activeKey
        this.$emit('change', this.accordion ? activeKey[0] : activeKey)
      },
      isActive (key) {
        return this.currentActiveKey.indexOf(key) > -1
      }
    }
  }
</script>
