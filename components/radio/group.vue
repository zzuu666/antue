<template>
  <div :class="`${this.prefixCls}-group`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'radioGroup',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-radio'
      },
      value: null
    },
    data () {
      return {
        valueList: [],
        radioList: [],
        currentValue: this.value
      }
    },
    methods: {
      change (val) {
        this.currentValue = val
        this.judge()
        this.$emit('input', val)
      },
      initValueList () {
        this.radioList = this.$children.filter(item => item.$options.name === 'radio')
        this.valueList = this.radioList.map(item => item.value)
        this.judge()
      },
      judge () {
        this.valueList.forEach((item, index) => {
          if (item === this.currentValue) {
            this.radioList[index].checkChange(true)
          } else {
            this.radioList[index].checkChange(false)
          }
        })
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      }
    },
    mounted () {
      this.initValueList()
    }
  }
</script>
