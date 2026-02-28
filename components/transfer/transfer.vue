<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-list`">
      <div :class="`${prefixCls}-list-header`">
        <checkbox
          :value="sourceAllChecked"
          :disabled="disabled"
          @change="handleSourceCheckAll"
        />
        <span :class="`${prefixCls}-list-header-selected`">
          {{ sourceCheckedKeys.length > 0 ? sourceCheckedKeys.length + '/' : '' }}{{ sourceData.length }} 条
        </span>
        <span :class="`${prefixCls}-list-header-title`">{{ titles[0] }}</span>
      </div>
      <div v-if="showSearch" :class="`${prefixCls}-list-body-search-wrapper`">
        <input
          :class="`${prefixCls}-list-search`"
          :value="sourceFilter"
          placeholder="请输入搜索内容"
          @input="handleSourceSearch"
        >
      </div>
      <ul :class="`${prefixCls}-list-content`">
        <li
          v-for="item in filteredSourceData"
          :key="item.key"
          :class="getItemClass(item)"
        >
          <checkbox
            :value="sourceCheckedKeys.indexOf(item.key) > -1"
            :disabled="disabled || item.disabled"
            @change="handleSourceCheck(item.key, $event)"
          />
          <span :class="`${prefixCls}-list-content-item-text`">{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <div :class="`${prefixCls}-operation`">
      <button
        type="button"
        :class="operationBtnClass('right')"
        :disabled="disabled || sourceCheckedKeys.length === 0"
        @click="moveToRight"
      >
        <icon type="right"></icon>
      </button>
      <button
        type="button"
        :class="operationBtnClass('left')"
        :disabled="disabled || targetCheckedKeys.length === 0"
        @click="moveToLeft"
      >
        <icon type="left"></icon>
      </button>
    </div>
    <div :class="`${prefixCls}-list`">
      <div :class="`${prefixCls}-list-header`">
        <checkbox
          :value="targetAllChecked"
          :disabled="disabled"
          @change="handleTargetCheckAll"
        />
        <span :class="`${prefixCls}-list-header-selected`">
          {{ targetCheckedKeys.length > 0 ? targetCheckedKeys.length + '/' : '' }}{{ targetData.length }} 条
        </span>
        <span :class="`${prefixCls}-list-header-title`">{{ titles[1] }}</span>
      </div>
      <div v-if="showSearch" :class="`${prefixCls}-list-body-search-wrapper`">
        <input
          :class="`${prefixCls}-list-search`"
          :value="targetFilter"
          placeholder="请输入搜索内容"
          @input="handleTargetSearch"
        >
      </div>
      <ul :class="`${prefixCls}-list-content`">
        <li
          v-for="item in filteredTargetData"
          :key="item.key"
          :class="getItemClass(item)"
        >
          <checkbox
            :value="targetCheckedKeys.indexOf(item.key) > -1"
            :disabled="disabled || item.disabled"
            @change="handleTargetCheck(item.key, $event)"
          />
          <span :class="`${prefixCls}-list-content-item-text`">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'
  import Checkbox from '../checkbox/checkbox.vue'

  export default {
    name: 'atu-transfer',
    props: {
      dataSource: {
        type: Array,
        default: () => []
      },
      targetKeys: {
        type: Array,
        default: () => []
      },
      titles: {
        type: Array,
        default: () => ['源列表', '目标列表']
      },
      showSearch: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-transfer'
      }
    },
    data () {
      return {
        currentTargetKeys: this.targetKeys || [],
        sourceCheckedKeys: [],
        targetCheckedKeys: [],
        sourceFilter: '',
        targetFilter: ''
      }
    },
    computed: {
      sourceData () {
        return this.dataSource.filter(item => this.currentTargetKeys.indexOf(item.key) === -1)
      },
      targetData () {
        return this.dataSource.filter(item => this.currentTargetKeys.indexOf(item.key) > -1)
      },
      filteredSourceData () {
        if (!this.sourceFilter) return this.sourceData
        const text = this.sourceFilter.toLowerCase()
        return this.sourceData.filter(item => item.title.toLowerCase().indexOf(text) > -1)
      },
      filteredTargetData () {
        if (!this.targetFilter) return this.targetData
        const text = this.targetFilter.toLowerCase()
        return this.targetData.filter(item => item.title.toLowerCase().indexOf(text) > -1)
      },
      sourceAllChecked () {
        const enabledItems = this.filteredSourceData.filter(item => !item.disabled)
        return enabledItems.length > 0 && enabledItems.every(item => this.sourceCheckedKeys.indexOf(item.key) > -1)
      },
      targetAllChecked () {
        const enabledItems = this.filteredTargetData.filter(item => !item.disabled)
        return enabledItems.length > 0 && enabledItems.every(item => this.targetCheckedKeys.indexOf(item.key) > -1)
      }
    },
    watch: {
      targetKeys (val) {
        this.currentTargetKeys = val || []
        this.sourceCheckedKeys = []
        this.targetCheckedKeys = []
      }
    },
    methods: {
      handleSourceCheck (key, checked) {
        const keys = [].concat(this.sourceCheckedKeys)
        const idx = keys.indexOf(key)
        if (checked && idx === -1) {
          keys.push(key)
        } else if (!checked && idx > -1) {
          keys.splice(idx, 1)
        }
        this.sourceCheckedKeys = keys
        this.$emit('selectChange', this.sourceCheckedKeys, this.targetCheckedKeys)
      },
      handleTargetCheck (key, checked) {
        const keys = [].concat(this.targetCheckedKeys)
        const idx = keys.indexOf(key)
        if (checked && idx === -1) {
          keys.push(key)
        } else if (!checked && idx > -1) {
          keys.splice(idx, 1)
        }
        this.targetCheckedKeys = keys
        this.$emit('selectChange', this.sourceCheckedKeys, this.targetCheckedKeys)
      },
      handleSourceCheckAll (checked) {
        if (checked) {
          this.sourceCheckedKeys = this.filteredSourceData.filter(item => !item.disabled).map(item => item.key)
        } else {
          this.sourceCheckedKeys = []
        }
        this.$emit('selectChange', this.sourceCheckedKeys, this.targetCheckedKeys)
      },
      handleTargetCheckAll (checked) {
        if (checked) {
          this.targetCheckedKeys = this.filteredTargetData.filter(item => !item.disabled).map(item => item.key)
        } else {
          this.targetCheckedKeys = []
        }
        this.$emit('selectChange', this.sourceCheckedKeys, this.targetCheckedKeys)
      },
      moveToRight () {
        const moveKeys = [].concat(this.sourceCheckedKeys)
        const newTargetKeys = [].concat(this.currentTargetKeys, moveKeys)
        this.currentTargetKeys = newTargetKeys
        this.sourceCheckedKeys = []
        this.$emit('change', newTargetKeys, 'right', moveKeys)
      },
      moveToLeft () {
        const moveKeys = [].concat(this.targetCheckedKeys)
        const newTargetKeys = this.currentTargetKeys.filter(key => moveKeys.indexOf(key) === -1)
        this.currentTargetKeys = newTargetKeys
        this.targetCheckedKeys = []
        this.$emit('change', newTargetKeys, 'left', moveKeys)
      },
      handleSourceSearch (e) {
        this.sourceFilter = e.target.value
        this.$emit('search', 'left', this.sourceFilter)
      },
      handleTargetSearch (e) {
        this.targetFilter = e.target.value
        this.$emit('search', 'right', this.targetFilter)
      },
      getItemClass (item) {
        return [
          `${this.prefixCls}-list-content-item`,
          {
            [`${this.prefixCls}-list-content-item-disabled`]: item.disabled
          }
        ]
      },
      operationBtnClass (direction) {
        return [
          `${this.prefixCls}-operation-btn`,
          `ant-btn`,
          `ant-btn-primary`,
          `ant-btn-sm`
        ]
      }
    },
    components: {
      Icon,
      Checkbox
    }
  }
</script>
