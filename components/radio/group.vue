<template>
  <div :class="classes">
    <div v-if="isOptions">
      <span v-for="(option, index) in options" :key="index">
        <radio :value="calculateValue(option)" :disabled="calculateDisabled(option)" :name="name">{{ calculateLabel(option) }}</radio>
      </span>
    </div>
    <slot v-if="!isOptions"></slot>
  </div>
</template>

<script>
  import Radio from './radio.vue'
  import { oneOf } from '../_util/proptype'
  export default {
    name: 'radioGroup',
    props: {
      disabled: {
        type: Boolean,
        default: undefined
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
      prefixCls: {
        type: String,
        default: 'ant-radio'
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return oneOf(value, ['large', 'default', 'small'])
        }
      },
      value: null
    },
    data () {
      return {
        currentValue: this.value,
        valueList: [],
        radioList: []
      }
    },
    computed: {
      classes () {
        return [
          `${this.prefixCls}-group`,
          {
            [`${this.prefixCls}-group-${this.size}`]: this.size
          }
        ]
      },
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
        this.disableChildren()
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
      },
      disableChildren () {
        if (this.disabled === undefined) return
        // 如果处于禁用状态，为子slot设上disable
        if (this.disabled) {
          this.radioList.forEach(item => {
            item.$data.disabledValue = true
          })
        } else if (this.disabled === false) {
          this.radioList.forEach(item => {
            item.$data.disabledValue = false
          })
        }
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
        this.$emit('change', this.currentValue)
      },
      disabled () {
        this.disableChildren()
      }
    },
    mounted () {
      this.initValueList()
    },
    components: {
      Radio
    }
  }
</script>
