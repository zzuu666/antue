<template>
  <div :class="`${prefixCls}-link`">
    <a
      :class="linkClasses"
      :href="href"
      :title="title"
      @click.prevent="handleClick"
    >{{ title }}</a>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'atu-anchor-link',
    props: {
      href: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      prefixCls: {
        type: String,
        default: 'ant-anchor'
      }
    },
    inject: ['anchor'],
    computed: {
      linkClasses () {
        return [
          `${this.prefixCls}-link-title`,
          {
            [`${this.prefixCls}-link-title-active`]: this.anchor.isActive(this.href)
          }
        ]
      }
    },
    methods: {
      handleClick (e) {
        this.anchor.handleClick(e, { href: this.href, title: this.title })
      }
    },
    mounted () {
      this.anchor.addLink(this.href)
    },
    beforeDestroy () {
      this.anchor.removeLink(this.href)
    }
  }
</script>
