<template>
  <div
    :class="classes"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <ul>
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
export default {
  props: {
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
  methods: {
    handleMouseEnter () {
      this.active = true
    },
    handleMouseLeave () {
      this.active = false
    },
    handleClick (value) {
      this.$emit('selected', this.type, value)
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
  }
}
</script>

