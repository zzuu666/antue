<template>
  <div :class="`${prefixCls}-item-meta`">
    <div v-if="avatar" :class="`${prefixCls}-item-meta-avatar`">
      <img v-if="isImgAvatar" :src="avatar" :class="`${prefixCls}-item-meta-avatar-img`" />
      <a-icon v-else :type="avatar" />
    </div>
    <div :class="`${prefixCls}-item-meta-content`">
      <h4 v-if="title" :class="`${prefixCls}-item-meta-title`">{{ title }}</h4>
      <div v-if="description" :class="`${prefixCls}-item-meta-description`">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import AIcon from '../icon'

export default {
  name: 'listItemMeta',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'ant-list'
    }
  },
  computed: {
    isImgAvatar () {
      return this.avatar && (this.avatar.indexOf('/') > -1 || this.avatar.indexOf('.') > -1)
    }
  },
  components: {
    AIcon
  }
}
</script>
