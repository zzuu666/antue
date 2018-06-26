<template>
  <div class="ant-anchor-link" :class="{'ant-anchor-link-active':active}">
    <a class="ant-anchor-link-title" :class="{'ant-anchor-link-title-active':active}" :href="href" :title="title" @click.prevent="handleClick">{{title}}</a>
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
    href: String,
    title: String
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    handleClick () {
      if (this.active) return
      this.anchorRoot.$emit('anchorClick', this)
      // document.querySelector(this.href).scrollIntoViewIfNeeded()
    }
  },
  mounted () {
    if (!this.anchorRoot.links.includes(this)) this.anchorRoot.links.push(this)
  }
}
</script>

