<template>
  <div :class="linkCls">
    <a :class="titleCls" :href="href" :title="title" @click.prevent="handleClick">{{title}}</a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AnchorLink',
  inject: ['anchorRoot'],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-anchor'
    },
    href: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    linkCls () {
      return [
        `${this.prefixCls}-link`,
        {
          [`${this.prefixCls}-link-active`]: this.active
        }
      ]
    },
    titleCls () {
      return [
        `${this.prefixCls}-link-title`,
        {
          [`${this.prefixCls}-link-title-active`]: this.active
        }
      ]
    }
  },
  methods: {
    handleClick () {
      if (this.active) return
      this.anchorRoot.$emit('anchorClick', this)
    }
  },
  mounted () {
    this.anchorRoot.registerLink(this)
  },
  beforeDestroy () {
    this.anchorRoot.unRegisterLink(this)
  }
}
</script>

