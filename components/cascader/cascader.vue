<template>
  <div :class="wrapClasses" v-clickoutside="handleClose">
    <span :class="`${prefixCls}-picker`" @click="toggleDropdown">
      <span :class="`${prefixCls}-picker-label`">{{ displayLabel }}</span>
      <input
        v-if="showSearch && visible"
        ref="searchInput"
        :class="`${prefixCls}-input`"
        :value="searchText"
        :placeholder="displayLabel || placeholder"
        @input="handleSearchInput"
      >
      <input
        v-else
        readonly
        :class="`${prefixCls}-input`"
        :value="displayLabel"
        :placeholder="placeholder"
      >
      <span v-if="allowClear && selectedValue.length" :class="`${prefixCls}-picker-clear`" @click.stop="handleClear">
        <icon type="cross-circle"></icon>
      </span>
      <span :class="`${prefixCls}-picker-arrow`">
        <icon type="down"></icon>
      </span>
    </span>
    <transition name="ant-slide-up">
      <div v-show="visible" :class="`${prefixCls}-menus`">
        <ul
          v-for="(menu, menuIndex) in menus"
          :key="menuIndex"
          :class="`${prefixCls}-menu`"
        >
          <li
            v-for="option in menu"
            :key="option.value"
            :class="getOptionClass(option, menuIndex)"
            @click.stop="handleSelect(option, menuIndex)"
            @mouseenter="handleMouseEnter(option, menuIndex)"
          >
            <span>{{ option.label }}</span>
            <span v-if="option.children && option.children.length" :class="`${prefixCls}-menu-item-expand-icon`">
              <icon type="right"></icon>
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon'
  import { oneOf } from '../_util/proptype'

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
    name: 'atu-cascader',
    directives: { clickoutside },
    props: {
      options: {
        type: Array,
        default: () => []
      },
      value: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowClear: {
        type: Boolean,
        default: false
      },
      showSearch: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return oneOf(value, ['large', 'default', 'small'])
        }
      },
      changeOnSelect: {
        type: Boolean,
        default: false
      },
      expandTrigger: {
        type: String,
        default: 'click',
        validator (value) {
          return oneOf(value, ['click', 'hover'])
        }
      },
      prefixCls: {
        type: String,
        default: 'ant-cascader'
      }
    },
    data () {
      return {
        visible: false,
        selectedValue: this.value || [],
        activeValue: this.value || [],
        searchText: ''
      }
    },
    computed: {
      wrapClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-picker-open`]: this.visible,
            [`${this.prefixCls}-picker-disabled`]: this.disabled,
            [`${this.prefixCls}-picker-lg`]: this.size === 'large',
            [`${this.prefixCls}-picker-sm`]: this.size === 'small'
          }
        ]
      },
      menus () {
        const result = []
        let current = this.options
        result.push(current)
        for (let i = 0; i < this.activeValue.length; i++) {
          const val = this.activeValue[i]
          const found = current.find(opt => opt.value === val)
          if (found && found.children && found.children.length) {
            current = found.children
            result.push(current)
          } else {
            break
          }
        }
        return result
      },
      displayLabel () {
        if (!this.selectedValue || !this.selectedValue.length) return ''
        const labels = []
        let current = this.options
        for (let i = 0; i < this.selectedValue.length; i++) {
          const val = this.selectedValue[i]
          const found = current.find(opt => opt.value === val)
          if (found) {
            labels.push(found.label)
            if (found.children && found.children.length) {
              current = found.children
            }
          } else {
            break
          }
        }
        return labels.join(' / ')
      },
      selectedOptions () {
        const result = []
        let current = this.options
        for (let i = 0; i < this.selectedValue.length; i++) {
          const val = this.selectedValue[i]
          const found = current.find(opt => opt.value === val)
          if (found) {
            result.push(found)
            if (found.children && found.children.length) {
              current = found.children
            }
          } else {
            break
          }
        }
        return result
      }
    },
    watch: {
      value (val) {
        this.selectedValue = val || []
        this.activeValue = val || []
      }
    },
    methods: {
      toggleDropdown () {
        if (this.disabled) return
        this.visible = !this.visible
        if (this.visible) {
          this.activeValue = [].concat(this.selectedValue)
          if (this.showSearch) {
            this.$nextTick(() => {
              this.$refs.searchInput && this.$refs.searchInput.focus()
            })
          }
        }
      },
      handleClose () {
        this.visible = false
        this.searchText = ''
      },
      handleSelect (option, menuIndex) {
        if (option.disabled) return
        if (this.expandTrigger === 'click') {
          this.expandOption(option, menuIndex)
        }
        if (!option.children || !option.children.length) {
          this.selectFinal(option, menuIndex)
        } else if (this.changeOnSelect) {
          const newValue = this.activeValue.slice(0, menuIndex + 1)
          this.selectedValue = newValue
          this.$emit('input', newValue)
          this.$emit('change', newValue, this.selectedOptions)
        }
      },
      handleMouseEnter (option, menuIndex) {
        if (option.disabled) return
        if (this.expandTrigger === 'hover') {
          this.expandOption(option, menuIndex)
        }
      },
      expandOption (option, menuIndex) {
        const newActive = this.activeValue.slice(0, menuIndex)
        newActive.push(option.value)
        this.activeValue = newActive
      },
      selectFinal (option, menuIndex) {
        const newValue = this.activeValue.slice(0, menuIndex)
        newValue.push(option.value)
        this.selectedValue = newValue
        this.activeValue = newValue
        this.visible = false
        this.searchText = ''
        this.$emit('input', newValue)
        this.$emit('change', newValue, this.selectedOptions)
      },
      handleClear () {
        this.selectedValue = []
        this.activeValue = []
        this.$emit('input', [])
        this.$emit('change', [], [])
      },
      handleSearchInput (e) {
        this.searchText = e.target.value
      },
      getOptionClass (option, menuIndex) {
        const isActive = this.activeValue[menuIndex] === option.value
        return [
          `${this.prefixCls}-menu-item`,
          {
            [`${this.prefixCls}-menu-item-active`]: isActive,
            [`${this.prefixCls}-menu-item-disabled`]: option.disabled,
            [`${this.prefixCls}-menu-item-expand`]: option.children && option.children.length
          }
        ]
      }
    },
    components: {
      Icon
    }
  }
</script>
