<template>
  <atu-button-group :class="prefixCls">
    <atu-button
      :type="type"
      :disabled="disabled"
      @click="handleClick">
      <slot></slot>
    </atu-button>
    <atu-dropdown
      :placement="placement"
      :trigger="trigger"
      :is-button="true"
      :type="type"
      :disabled="disabled">
      <template slot="overlay">
        <slot name="overlay"></slot>
      </template>
    </atu-dropdown>
  </atu-button-group>
</template>

<script>
import { oneOf } from '../_util/proptype'
import AtuIcon from '../icon'
import AtuButton from '../button'
import AtuDropdown from './dropdown'

const AtuButtonGroup = AtuButton.Group

export default {
  name: 'dropdownButton',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-dropdown-button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottomRight'
    },
    size: {
      type: String,
      default: '',
      validator (value) {
        return oneOf(value, ['small', 'large', ''])
      }
    },
    trigger: {
      type: String,
      default: 'hover',
      validator (value) {
        return oneOf(value, ['hover', 'click'])
      }
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['primary', 'dashed', 'danger', 'default'])
      }
    }
  },
  components: {
    AtuIcon,
    AtuButton,
    AtuButtonGroup,
    AtuDropdown
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
