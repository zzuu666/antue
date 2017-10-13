<template>
  <div :class="`${this.prefixCls}-group`">
    <div v-if="isOptions">
      <span v-for="option in  options">
        <radio :value="calculateValue(option)" :disabled="calculateDisabled(option)" :name="name">{{ calculateLabel(option) }}</radio>
      </span>
    </div>
    <slot v-if="!isOptions"></slot>
  </div>
</template>

<script>
  import Radio from './radio.vue'
  export default {
    name: 'radioGroup',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-radio'
      },
      name: {
        type: String,
        default: ''
      },
      options: {
        type: Array,
        default () {
          return []
        }
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
    computed: {
      isOptions () {
        return this.options.length !== 0
      }
    },
    methods: {
      change (val) { // 在子组件调用，点击子组件，当其父组件为groupRadio时，会出发此事件
        this.currentValue = val
        this.judge()
        this.$emit('input', val)
      },
      initValueList () { // 获取子组件的values列表
        this.radioList = this.$children.filter(item => item.$options.name === 'radio')
        this.valueList = this.radioList.map(item => item.value)
        this.judge()
      },
      judge () { // 判断点击的是哪一个子组件并为其设置选中状态
        this.valueList.forEach((item, index) => {
          if (item === this.currentValue) {
            this.radioList[index].checkChange(true)
          } else {
            this.radioList[index].checkChange(false)
          }
        })
      },
      calculateValue (option) {
        if (typeof option === 'string') {
          return option
        } else if (typeof option === 'object') {
          return option.value
        }
      },
      calculateLabel (option) {
        if (typeof option === 'string') {
          return option
        } else if (typeof option === 'object') {
          return option.label
        }
      },
      calculateDisabled (option) {
        if (typeof option.disabled === 'undefined') {
          return false
        } else {
          return option.disabled
        }
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
        this.$emit('change', this.currentValue)
      }
    },
    components: {
      Radio
    },
    mounted () {
      this.initValueList()
      console.log(this.$children)
    }
  }
</script>
