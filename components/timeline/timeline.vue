<template>
  <ul :class="classes">
    <slot></slot>
    <timeline-item v-if="pending || $slots.pending" :pending="true">
      <slot name="pending">
        {{typeof pending === 'string' ? pending : ''}}
      </slot>
    </timeline-item>
  </ul>
</template>

<script>
import TimelineItem from './timeline-item'

export default {
  name: 'timeline',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-timeline'
    },
    pending: {
      type: [Boolean, String],
      default: false
    }
  },
  data () {
    return {
      lastUid: -1
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        {
          [`${prefixCls}-pending`]: !!this.pending || !!this.$slots.pending
        }
      ]
    }
  },
  components: {
    TimelineItem
  },
  methods: {
    getLastItemUid () {
      /**
       * 如果存在 pending 或者 pending slot pending 的内容必然为 last
       */
      const valid = this.$slots.default.filter(slot => slot.tag !== undefined)
      return valid[valid.length - 1].componentInstance._uid
    }
  },
  mounted () {
    this.lastUid = this.getLastItemUid()
  }
}
</script>
