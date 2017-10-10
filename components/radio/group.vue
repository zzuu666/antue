<template>
  <div :class="`${this.prefixCls}-group`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'radioGroup',
    componentName: 'RadioGroup',
    model: {
      prop: 'check',
      event: 'change'
    },
    props: {
      prefixCls: {
        type: String,
        default: 'ant-radio'
      }
    },
    computed: {
      checkedData () {
        console.log(this.$children)
        if (this.$children.length !== 0) {
          for (let i = 0; i < this.$children.length; i++) {
            if (this.$children[i].checked) {
              return i
            } else {
              return 0
            }
          }
        }
      }
    },
    methods: {
      change (val) {
        console.log(this.checkedData)
        this.$children[this.checkedData].checkchange()
      }
    }
  }
</script>

<style>

</style>
