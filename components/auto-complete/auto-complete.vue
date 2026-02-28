<template>
  <div :class="wrapClasses" v-clickoutside="handleClose">
    <div :class="`${prefixCls}-selection ${prefixCls}-selection--single`" @click="handleFocus">
      <div :class="`${prefixCls}-selection__rendered`">
        <input
          ref="input"
          :class="`${prefixCls}-search__field`"
          :value="currentValue"
          :placeholder="placeholder"
          :disabled="disabled"
          @input="handleInput"
          @focus="handleFocus"
          @keydown.up.prevent="handleKeyUp"
          @keydown.down.prevent="handleKeyDown"
          @keydown.enter.prevent="handleKeyEnter"
        />
      </div>
      <span
        v-if="allowClear && currentValue"
        :class="`${prefixCls}-selection__clear`"
        @click.stop="handleClear"
      >
        <icon type="cross-circle"></icon>
      </span>
    </div>
    <transition name="ant-select-dropdown-slide-up">
      <div v-show="visible && filteredData.length" :class="dropdownClasses">
        <ul :class="`${prefixCls}-dropdown-menu`">
          <li
            v-for="(item, index) in filteredData"
            :key="index"
            :class="getOptionClass(index)"
            @click="handleSelect(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../icon'

const clickoutside = {
  bind (el, binding) {
    el._clickOutside = (e) => {
      if (!el.contains(e.target)) {
        binding.value()
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unbind (el) {
    document.removeEventListener('click', el._clickOutside)
  }
}

export default {
  name: 'autoComplete',
  directives: { clickoutside },
  props: {
    value: {
      type: String,
      default: ''
    },
    dataSource: {
      type: Array,
      default () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'ant-select'
    }
  },
  data () {
    return {
      currentValue: this.value,
      visible: false,
      activeIndex: -1
    }
  },
  computed: {
    wrapClasses () {
      return [
        this.prefixCls,
        `${this.prefixCls}-auto-complete`,
        {
          [`${this.prefixCls}-open`]: this.visible,
          [`${this.prefixCls}-disabled`]: this.disabled,
          [`${this.prefixCls}-enabled`]: !this.disabled
        }
      ]
    },
    dropdownClasses () {
      return [
        `${this.prefixCls}-dropdown`,
        `${this.prefixCls}-dropdown--below`,
        `${this.prefixCls}-dropdown-placement-bottomLeft`
      ]
    },
    filteredData () {
      if (!this.currentValue) return this.dataSource
      return this.dataSource.filter(item =>
        String(item).toLowerCase().indexOf(this.currentValue.toLowerCase()) > -1
      )
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput (e) {
      this.currentValue = e.target.value
      this.visible = true
      this.activeIndex = -1
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
      this.$emit('search', this.currentValue)
    },
    handleFocus () {
      if (this.disabled) return
      this.visible = true
    },
    handleClose () {
      this.visible = false
      this.activeIndex = -1
    },
    handleSelect (item) {
      this.currentValue = String(item)
      this.visible = false
      this.activeIndex = -1
      this.$emit('input', this.currentValue)
      this.$emit('select', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    handleClear () {
      this.currentValue = ''
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('search', '')
    },
    handleKeyUp () {
      if (this.activeIndex > 0) {
        this.activeIndex--
      }
    },
    handleKeyDown () {
      if (this.activeIndex < this.filteredData.length - 1) {
        this.activeIndex++
      }
    },
    handleKeyEnter () {
      if (this.activeIndex >= 0 && this.activeIndex < this.filteredData.length) {
        this.handleSelect(this.filteredData[this.activeIndex])
      }
    },
    getOptionClass (index) {
      return [
        `${this.prefixCls}-dropdown-menu-item`,
        {
          [`${this.prefixCls}-dropdown-menu-item-active`]: this.activeIndex === index
        }
      ]
    }
  },
  components: {
    Icon
  }
}
</script>
