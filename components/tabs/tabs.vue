<template>
  <div :class="classes">
    <tabs-bar></tabs-bar>
    <tabs-content>
      <slot></slot>
    </tabs-content>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'
import TabsBar from './tabs-bar'
import TabsContent from './tabs-content'

export default {
  name: 'tabs',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    active: {
      type: [String, Number]
    },
    animated: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return oneOf(value, ['top', 'right', 'bottom', 'left'])
      }
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['default', 'small'])
      }
    },
    type: {
      type: String,
      default: 'line',
      validator (value) {
        return oneOf(value, ['card', 'editable-card', 'line'])
      }
    }
  },
  components: {
    TabsBar,
    TabsContent
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        `${prefixCls}-${this.position}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-mini`]: this.size === 'small',
          [`${prefixCls}-vertical`]: this.position === 'left' || this.postion === 'right',
          [`${prefixCls}-card`]: this.type === 'card' || this.type === 'editable-card',
          [`${prefixCls}-no-animation`]: this.animated
        }
      ]
    }
  }
}
</script>
