<template>
  <ul :class="[prefixCls, disabled ? `${prefixCls}-disabled`: '']" @mouseleave="onMouseLeave">
    <star v-for="i in count"
      ref="stars"
      :key="i"
      :disabled="disabled"
      :index="i"
      :new-value="newValue"
      :value="value"
      :allow-half="allowHalf"
      @onClick="onClick"
      @onHover="onHover"
      :prefix-cls="`${prefixCls}-star`">
      <template scope="props">
        <slot>
           <Icon type="star"></Icon>
        </slot>
      </template>
    </star>
  </ul>
</template>

<script>
import Star from './star.vue'
import Icon from '../icon/index'
import { noop, getOffsetLeft } from '../_util/util'
export default {
  props: {
    disabled: Boolean,
    value: Number,
    defaultValue: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 5
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'ant-rate'
    },
    onChange: {
      type: Function,
      default: noop
    },
    onHoverChange: {
      type: Function,
      default: noop
    }
  },
  data () {
    return {
      hoverValue: undefined,
      newValue: undefined,
      markValue: undefined
    }
  },
  created () {
    this.newValue = this.markValue = this.value || this.defaultValue
  },
  watch: {
    hoverValue (v) {
      if (v === undefined) {
        this.newValue = this.markValue
        return
      }
      this.newValue = v
    }
  },
  methods: {
    onClick (e, index) {
      const value = this.getStarValue(index, e.pageX)
      this.markValue = value
      this.onMouseLeave()
      this.$emit('onChange', value)
    },
    onHover (e, index) {
      this.hoverValue = this.getStarValue(index, e.pageX)
      this.$emit('onHoverChange', this.hoverValue)
    },
    getStarDOM (index) {
      return this.$refs.stars[index].$el
    },
    getStarValue (index, x) {
      let value = index
      if (this.allowHalf) {
        const leftEdge = getOffsetLeft(this.getStarDOM(0))
        const width = getOffsetLeft(this.getStarDOM(1)) - leftEdge
        if ((x - leftEdge - width * (index - 1)) < width / 2) {
          value -= 0.5
        }
      }
      return value
    },
    onMouseLeave () {
      this.hoverValue = undefined
      this.$emit('onHoverChange', undefined)
    }
  },
  components: {
    Star,
    Icon
  }
}
</script>
