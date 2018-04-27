<template>
  <div
    :class="classes"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <ul ref="list">
      <li
        v-for="(item, index) in options"
        :class="{
          [`${prefixCls}-select-option-selected`]: selectedIndex === index,
          [`${prefixCls}-select-option-disabled`]: item.disabled
        }"
        :disabled="item.disabled"
        :key="item.value"
        @click="handleClick(item.value)">
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>

const scrollTo = (element, to, duration) => {
  const requestAnimationFrame = window.requestAnimationFrame ||
    function requestAnimationFrameTimeout () {
      return setTimeout(arguments[0], 10)
    }
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to
    return
  }
  const difference = to - element.scrollTop
  const perTick = difference / duration * 10

  requestAnimationFrame(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  })
}

export default {
  props: {
    isShow: Boolean,
    prefixCls: String,
    options: Array,
    selectedIndex: Number,
    type: String
  },
  data () {
    return {
      active: false
    }
  },
  watch: {
    isShow (v) {
      v && this.scrollToSelected(0)
    },
    selectedIndex (v) {
      this.scrollToSelected(120)
    }
  },
  methods: {
    handleMouseEnter () {
      this.active = true
    },
    handleMouseLeave () {
      this.active = false
    },
    handleClick (value) {
      this.$emit('selected', this.type, value)
    },
    scrollToSelected (duration) {
      const select = this.$el
      const list = this.$refs.list
      if (!list) {
        return
      }
      const index = this.selectedIndex < 0 ? 0 : this.selectedIndex
      const topOption = list.children[index]
      const to = topOption.offsetTop
      scrollTo(select, to, duration)
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-select`,
        {
          [`${prefixCls}-select-active`]: this.active
        }
      ]
    }
  },
  mounted () {
    this.scrollToSelected(0)
  }
}
</script>

