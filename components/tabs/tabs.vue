<template>
  <div :class="classes">
    <tabs-bar
      :tabs="tabs"
      :size="size"
      :active="active"
      :position="position"
      :type="type"
      @change="handleChange"
      @edit="handleEdit">
      <slot name="extra"></slot>
    </tabs-bar>
    <tabs-content
      ref="content"
      :active="active"
      :activeIndex="activeIndex"
      @contentUpdate="getPanes">
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
  data () {
    return {
      panes: []
    }
  },
  model: {
    prop: 'active',
    event: 'change'
  },
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
          [`${prefixCls}-vertical`]: this.position === 'left' || this.position === 'right',
          [`${prefixCls}-card`]: this.type === 'card' || this.type === 'editable-card',
          [`${prefixCls}-no-animation`]: !this.animated
        }
      ]
    },
    tabs () {
      return this.panes.map(vm => {
        return {
          index: vm.index,
          tab: vm.$slots.tab ? vm.$slots.tab : vm.tab,
          disabled: vm.disabled,
          icon: vm.icon
        }
      })
    },
    activeIndex () {
      return this.panes.findIndex(vm => vm.index === this.active)
    }
  },
  methods: {
    getPanes (value) {
      const slots = this.$refs.content.$children
      this.panes = slots
    },
    handleChange (index) {
      this.$emit('change', index)
    },
    handleEdit (action, index) {
      this.$emit('edit', action, index)
    }
  },
  mounted () {
    this.getPanes()
  }
}
</script>
