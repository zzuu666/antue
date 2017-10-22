<template>
  <ul :class="`${this.prefixCls}`">
    <li
      tabIndex="0"
      :class="`${hasPrev ? '' : `${prefixCls}-disabled`} ${prefixCls}-prev`"
      :title="showTitle ? locale.prev_page : null"
      :aria-disabled="!hasPrev"
      @click="prev"
      @keypress="runIfEnterPrev"
    >
      <slot name="prev">
        <a class="ant-pagination-item-link"></a>
      </slot>
    </li>

    <!--first page : when current -->
    <li tabIndex="0" @click="handleChange(1)" :class="`${this.prefixCls}-item`" v-if="pageRange[0] !== 1">
      <a>1</a>
    </li>

    <li
      tabIndex="0"
      v-if="showJumpPrev"
      :class="`${prefixCls}-jump-prev`"
      @click="jumpPrev"
      @keypress="runIfEnterJumpPrev"
    >
      <a :class="`${prefixCls}-item-link`"></a>
    </li>

    <li tabIndex="0" v-for="i in pageRange" :class="pagerClasses(i)" @click="clickPage(i)" ref="page">
      <a>{{i}}</a>
    </li>

    <li
      v-if="showJumpNext"
      tabIndex="0"
      @click="jumpNext"
      @keypress="runIfEnterJumpNext"
      :class="`${prefixCls}-jump-next`"
    >
      <a :class="`${prefixCls}-item-link`"></a>
    </li>

    <!--last page : when current < last - 5-->
    <li tabIndex="0" @click="handleChange(calculatePage)" :class="`${this.prefixCls}-item`" v-if="pageRange[pageRange.length-1] !== calculatePage">
      <a>{{calculatePage}}</a>
    </li>

    <li
      tabIndex="0"
      :aria-disabled="!hasNext"
      :class="`${this.hasNext ? '' : `${prefixCls}-disabled`} ${prefixCls}-next`"
      @click="next"
      @keydown="runIfEnterNext"
    >
      <slot name="next">
        <a :class="`${prefixCls}-item-link`"></a>
      </slot>
    </li>

    <page-option v-if="showQuickJumper" @jump-to="handleQuickJump"></page-option>

  </ul>
</template>

<script>
  //  import KEYCODE from './KeyCode'
  import LOCALE from './locale/zh_CN'
  import PageOption from './option'

  export default {
    props: {
      controlled: {
        type: Boolean,
        default: false
      },
      current: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      prefixCls: {
        type: String,
        default: 'ant-pagination'
      },
      showQuickJumper: {
        type: Boolean,
        default: false
      },
      showSizeChanger: {
        type: Boolean,
        default: false
      },
      showTitle: Boolean,
      showTotal: Function,
      simple: Boolean,
      size: String,
      total: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        locale: LOCALE,
        currentPage: this.current,
        changeByPager: false
      }
    },
    computed: {
      calculatePage () {
        return Math.floor((this.total - 1) / this.pageSize) + 1
      },
      hasPrev () {
        return this.currentPage > 1
      },
      hasNext () {
        return this.currentPage < this.calculatePage
      },
      pageRange () {
        let rs = []
        if (this.calculatePage > 5) {
          if (this.currentPage > 2 && this.currentPage < this.calculatePage - 2) {
            rs = this.range(this.currentPage - 2, this.currentPage + 2)
          } else if (this.currentPage <= 2) {
            rs = this.range(1, 5)
          } else {
            rs = this.range(this.calculatePage - 4, this.calculatePage)
          }
        } else {
          rs = this.range(1, this.calculatePage)
        }
        return rs
      },
      showJumpNext () {
        return this.calculatePage - this.currentPage > 3 && this.calculatePage > 5
      },
      showJumpPrev () {
        return this.currentPage > 4 && this.calculatePage > 5
      }
    },
    watch: {
      current () {
        this.currentPage = this.current
      },
      pageRange () {
        if (this.pageRange[0] !== 1 && this.pageRange[this.pageRange.length - 1] !== this.calculatePage && this.changeByPager) {
          this.changeByPager = false
          this.$refs.page[2].focus()
        }
      }
    },
    methods: {
      clickPage (i) {
        this.changeByPager = true
        this.handleChange(i)
      },
      handleChange (i) {
        this.$emit('change-page', i)
        if (!this.controlled) this.currentPage = i
      },
      handleGoTO () {},
      handleQuickJump (newPageText) {
        const newPage = parseInt(newPageText, 10)
        if (isNaN(newPage)) return false
        if (newPage < 1) {
          this.handleChange(1)
        } else if (newPage > this.calculatePage) {
          this.handleChange(this.calculatePage)
        } else {
          this.handleChange(newPage)
        }
      },
      jumpNext () {
        this.calculatePage - this.currentPage > 5 ? this.handleChange(this.currentPage + 5) : this.handleChange(this.calculatePage)
      },
      jumpPrev () {
        this.currentPage > 5 ? this.handleChange(this.currentPage - 5) : this.handleChange(1)
      },
      next () {
        if (this.hasNext) {
          this.handleChange(this.currentPage + 1)
        }
      },
      pagerClasses (i) {
        return [
          `${this.prefixCls}-item`,
          {
            [`${this.prefixCls}-item-active`]: this.currentPage === i,
            [`${this.prefixCls}-item-after-jump-prev`]: i === this.pageRange[0] && this.showJumpPrev,
            [`${this.prefixCls}-item-before-jump-next`]: i === this.pageRange[this.pageRange.length - 1] && this.showJumpNext
          }
        ]
      },
      prev () {
        if (this.hasPrev) {
          this.handleChange(this.currentPage - 1)
        }
      },
      range (start, end) {
        let arr = []
        for (let i = start; i <= end; i++) {
          arr.push(i)
        }
        return arr
      },
      runIfEnterJumpNext (event) {
        (event.key === 'Enter' || event.charCode === 13) && this.jumpNext()
      },
      runIfEnterJumpPrev (event) {
        (event.key === 'Enter' || event.charCode === 13) && this.jumpPrev()
      },
      runIfEnterNext (event) {
        (event.key === 'Enter' || event.charCode === 13) && this.next()
      },
      runIfEnterPrev (event) {
        (event.key === 'Enter' || event.charCode === 13) && this.prev()
      }
    },
    components: {
      PageOption
    }
  }
</script>
