<template>
  <div :class="wrapClasses">
    <div :class="`${prefixCls}-wrapper`">
      <div :class="`${prefixCls}-ink`">
        <span :class="inkClasses" :style="inkStyle"></span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'atu-anchor',
    props: {
      offsetTop: {
        type: Number,
        default: 0
      },
      affix: {
        type: Boolean,
        default: true
      },
      prefixCls: {
        type: String,
        default: 'ant-anchor'
      }
    },
    data () {
      return {
        links: [],
        currentLink: ''
      }
    },
    provide () {
      return {
        anchor: this
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${this.prefixCls}-wrapper`,
          {
            [`${this.prefixCls}-fixed`]: this.affix
          }
        ]
      },
      inkClasses () {
        return [
          `${this.prefixCls}-ink-ball`,
          {
            visible: this.currentLink
          }
        ]
      },
      inkStyle () {
        return {}
      }
    },
    methods: {
      addLink (href) {
        if (this.links.indexOf(href) === -1) {
          this.links.push(href)
        }
      },
      removeLink (href) {
        const index = this.links.indexOf(href)
        if (index > -1) {
          this.links.splice(index, 1)
        }
      },
      setCurrentLink (href) {
        if (this.currentLink !== href) {
          this.currentLink = href
          this.$emit('change', href)
        }
      },
      handleClick (e, link) {
        this.$emit('click', e, link)
        this.setCurrentLink(link.href)
      },
      isActive (href) {
        return this.currentLink === href
      }
    },
    mounted () {
      this.handleScroll = () => {
        let currentLink = ''
        this.links.forEach(href => {
          const target = document.querySelector(href)
          if (target) {
            const top = target.getBoundingClientRect().top
            if (top <= this.offsetTop + 5) {
              currentLink = href
            }
          }
        })
        this.setCurrentLink(currentLink)
      }
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
