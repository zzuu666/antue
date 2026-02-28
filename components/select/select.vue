<template>
  <div :class="wrapClasses" v-clickoutside="handleClose">
    <div :class="selectorClasses" @click="toggleDropdown" ref="selector">
      <div v-if="multiple" :class="`${prefixCls}-selection__rendered`">
        <template v-if="selectedLabels.length">
          <span
            v-for="item in selectedLabels"
            :key="item.value"
            :class="`${prefixCls}-selection__choice`"
          >
            <span :class="`${prefixCls}-selection__choice__content`">{{ item.label }}</span>
            <span :class="`${prefixCls}-selection__choice__remove`" @click.stop="removeSelected(item.value)">
              <icon type="cross"></icon>
            </span>
          </span>
        </template>
        <span v-if="!selectedLabels.length && !searchText" :class="`${prefixCls}-selection__placeholder`">{{ placeholder }}</span>
        <div v-if="showSearch" :class="`${prefixCls}-search ${prefixCls}-search--inline`">
          <input
            ref="searchInput"
            :value="searchText"
            :class="`${prefixCls}-search__field`"
            @input="handleSearchInput"
            @keydown.delete="handleBackspace"
          >
        </div>
      </div>
      <div v-else :class="`${prefixCls}-selection__rendered`">
        <span v-if="selectedLabel" :class="`${prefixCls}-selection-selected-value`">{{ selectedLabel }}</span>
        <span v-else :class="`${prefixCls}-selection__placeholder`">{{ placeholder }}</span>
      </div>
      <span v-if="allowClear && hasValue" :class="`${prefixCls}-selection__clear`" @click.stop="handleClear">
        <icon type="cross-circle"></icon>
      </span>
      <span :class="`${prefixCls}-arrow`">
        <icon type="down"></icon>
      </span>
    </div>
    <transition name="ant-select-dropdown-slide-up">
      <div v-show="visible" :class="dropdownClasses" :style="dropdownStyle">
        <div v-if="showSearch && !multiple" :class="`${prefixCls}-dropdown-search`">
          <div :class="`${prefixCls}-search ${prefixCls}-search--dropdown`">
            <input
              ref="searchInput"
              :value="searchText"
              :class="`${prefixCls}-search__field`"
              :placeholder="'请输入搜索内容'"
              @input="handleSearchInput"
            >
          </div>
        </div>
        <ul :class="`${prefixCls}-dropdown-menu`">
          <li
            v-for="option in filteredOptions"
            :key="option.value"
            :class="getOptionClass(option)"
            @click.stop="handleSelect(option)"
          >
            {{ option.label }}
          </li>
          <li v-if="!filteredOptions.length" :class="`${prefixCls}-dropdown-menu-item ${prefixCls}-dropdown-menu-item-disabled`">
            {{ notFoundContent }}
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
    name: 'atu-select',
    directives: { clickoutside },
    props: {
      value: {
        type: [String, Number, Array],
        default: undefined
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
      multiple: {
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
      options: {
        type: Array,
        default: () => []
      },
      notFoundContent: {
        type: String,
        default: '无匹配结果'
      },
      prefixCls: {
        type: String,
        default: 'ant-select'
      }
    },
    data () {
      return {
        visible: false,
        searchText: '',
        selectedValue: this.multiple ? (this.value || []) : this.value
      }
    },
    computed: {
      wrapClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-open`]: this.visible,
            [`${this.prefixCls}-disabled`]: this.disabled,
            [`${this.prefixCls}-enabled`]: !this.disabled,
            [`${this.prefixCls}-lg`]: this.size === 'large',
            [`${this.prefixCls}-sm`]: this.size === 'small'
          }
        ]
      },
      selectorClasses () {
        return [
          `${this.prefixCls}-selection`,
          this.multiple ? `${this.prefixCls}-selection--multiple` : `${this.prefixCls}-selection--single`
        ]
      },
      dropdownClasses () {
        return [
          `${this.prefixCls}-dropdown`,
          `${this.prefixCls}-dropdown--below`,
          `${this.prefixCls}-dropdown-placement-bottomLeft`
        ]
      },
      dropdownStyle () {
        return { width: '100%' }
      },
      normalizedOptions () {
        return this.options.map(opt => {
          if (typeof opt === 'string' || typeof opt === 'number') {
            return { label: String(opt), value: opt, disabled: false }
          }
          return { label: opt.label || String(opt.value), value: opt.value, disabled: !!opt.disabled }
        })
      },
      filteredOptions () {
        if (!this.searchText) return this.normalizedOptions
        const text = this.searchText.toLowerCase()
        return this.normalizedOptions.filter(opt => opt.label.toLowerCase().indexOf(text) > -1)
      },
      selectedLabel () {
        if (this.multiple) return ''
        const opt = this.normalizedOptions.find(o => o.value === this.selectedValue)
        return opt ? opt.label : ''
      },
      selectedLabels () {
        if (!this.multiple || !Array.isArray(this.selectedValue)) return []
        return this.selectedValue.map(val => {
          const opt = this.normalizedOptions.find(o => o.value === val)
          return opt || { label: String(val), value: val }
        })
      },
      hasValue () {
        if (this.multiple) return this.selectedValue && this.selectedValue.length > 0
        return this.selectedValue !== undefined && this.selectedValue !== null && this.selectedValue !== ''
      }
    },
    watch: {
      value (val) {
        this.selectedValue = val
      }
    },
    methods: {
      toggleDropdown () {
        if (this.disabled) return
        this.visible = !this.visible
        if (this.visible && this.showSearch) {
          this.$nextTick(() => {
            this.$refs.searchInput && this.$refs.searchInput.focus()
          })
        }
      },
      handleClose () {
        this.visible = false
        this.searchText = ''
      },
      handleSelect (option) {
        if (option.disabled) return
        if (this.multiple) {
          const arr = [].concat(this.selectedValue || [])
          const idx = arr.indexOf(option.value)
          if (idx > -1) {
            arr.splice(idx, 1)
          } else {
            arr.push(option.value)
          }
          this.selectedValue = arr
          this.$emit('input', arr)
          this.$emit('change', arr)
          this.searchText = ''
        } else {
          this.selectedValue = option.value
          this.$emit('input', option.value)
          this.$emit('change', option.value)
          this.visible = false
          this.searchText = ''
        }
      },
      removeSelected (value) {
        if (this.disabled) return
        const arr = this.selectedValue.filter(v => v !== value)
        this.selectedValue = arr
        this.$emit('input', arr)
        this.$emit('change', arr)
      },
      handleClear () {
        if (this.multiple) {
          this.selectedValue = []
          this.$emit('input', [])
          this.$emit('change', [])
        } else {
          this.selectedValue = undefined
          this.$emit('input', undefined)
          this.$emit('change', undefined)
        }
      },
      handleSearchInput (e) {
        this.searchText = e.target.value
        this.$emit('search', this.searchText)
      },
      handleBackspace () {
        if (this.multiple && !this.searchText && this.selectedValue.length) {
          this.removeSelected(this.selectedValue[this.selectedValue.length - 1])
        }
      },
      getOptionClass (option) {
        const selected = this.multiple
          ? (this.selectedValue || []).indexOf(option.value) > -1
          : this.selectedValue === option.value
        return [
          `${this.prefixCls}-dropdown-menu-item`,
          {
            [`${this.prefixCls}-dropdown-menu-item-selected`]: selected,
            [`${this.prefixCls}-dropdown-menu-item-disabled`]: option.disabled,
            [`${this.prefixCls}-dropdown-menu-item-active`]: selected
          }
        ]
      }
    },
    components: {
      Icon
    }
  }
</script>
