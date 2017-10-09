<template>
  <div :class="`${this.prefixCls}-group`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'radioGroup',
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
        if (this.$children.length !== 0) {
          for (let i = 0; i < this.$children.length; i++) {
            if (this.$children[i].checked) {
              return this.$children[i].value
            }
          }
        }
      }
    },
    watch: {
      checkedData () {
      //        if (this.check === this.value) {
      //          this.checkedValue = true
      //        } else {
        this.checkedValue = this.checkedData
      //        }
      }
    }
  }
</script>

<style>

</style>
