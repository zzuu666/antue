<template>
  <div :class="wrapClasses">
    <div v-if="loading" :class="`${prefixCls}-loading`">
      <div :class="`${prefixCls}-loading-mask`"></div>
      <div :class="`${prefixCls}-loading-text`">{{ locale.loadingText }}</div>
    </div>
    <div :class="`${prefixCls}-content`">
      <div :class="`${prefixCls}-scroll`" v-if="scroll.y">
        <div :class="`${prefixCls}-header`" ref="tableHeader">
          <table :class="tableClasses" :style="tableWidthStyle">
            <colgroup>
              <col v-if="selectable" :style="{ width: '62px', minWidth: '62px' }">
              <col v-for="col in normalizedColumns" :key="getColumnKey(col)" :style="getColStyle(col)">
            </colgroup>
            <thead :class="`${prefixCls}-thead`">
              <tr>
                <th v-if="selectable" :class="`${prefixCls}-selection-column`">
                  <checkbox
                    v-if="rowSelectionType === 'checkbox'"
                    :value="isAllSelected"
                    :indeterminate="isIndeterminate"
                    @change="handleSelectAll"
                  ></checkbox>
                </th>
                <th
                  v-for="col in normalizedColumns"
                  :key="getColumnKey(col)"
                  :class="getHeaderCellClass(col)"
                  :style="getColStyle(col)"
                  @click="handleHeaderClick(col)"
                >
                  <span>{{ col.title }}</span>
                  <span v-if="col.sorter" :class="`${prefixCls}-column-sorter`">
                    <span :class="getSorterClass('ascend', col)" @click.stop="handleSort(col, 'ascend')">
                      <icon type="caret-up"></icon>
                    </span>
                    <span :class="getSorterClass('descend', col)" @click.stop="handleSort(col, 'descend')">
                      <icon type="caret-down"></icon>
                    </span>
                  </span>
                  <filter-dropdown
                    v-if="col.filters && col.filters.length"
                    :filters="col.filters"
                    :prefixCls="prefixCls"
                    :selectedKeys="getColumnFilteredValue(col)"
                    @confirm="(keys) => handleFilter(col, keys)"
                    @reset="handleFilterReset(col)"
                  ></filter-dropdown>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div :class="`${prefixCls}-body`" :style="bodyScrollStyle" @scroll="handleBodyScroll">
          <table :class="tableClasses" :style="tableWidthStyle">
            <colgroup>
              <col v-if="selectable" :style="{ width: '62px', minWidth: '62px' }">
              <col v-for="col in normalizedColumns" :key="getColumnKey(col)" :style="getColStyle(col)">
            </colgroup>
            <tbody :class="`${prefixCls}-tbody`">
              <template v-if="displayData.length">
                <tr
                  v-for="(record, index) in displayData"
                  :key="getRowKey(record, index)"
                  :class="getRowClass(record, index)"
                  @click="handleRowClick(record, index)"
                >
                  <td v-if="selectable" :class="`${prefixCls}-selection-column`">
                    <checkbox
                      v-if="rowSelectionType === 'checkbox'"
                      :value="isRowSelected(record, index)"
                      :disabled="getCheckboxDisabled(record, index)"
                      @change="(checked) => handleSelect(record, index, checked)"
                    ></checkbox>
                    <radio-inner
                      v-if="rowSelectionType === 'radio'"
                      :checked="isRowSelected(record, index)"
                      :disabled="getCheckboxDisabled(record, index)"
                      @change="() => handleSelect(record, index, true)"
                    ></radio-inner>
                  </td>
                  <td
                    v-for="col in normalizedColumns"
                    :key="getColumnKey(col)"
                    :class="getCellClass(col)"
                  >
                    <template v-if="col.render">
                      <render-cell :render="col.render" :row="record" :column="col" :index="index"></render-cell>
                    </template>
                    <template v-else>
                      {{ getCellValue(record, col) }}
                    </template>
                  </td>
                </tr>
              </template>
              <tr v-else>
                <td :colspan="totalColumns" :class="`${prefixCls}-placeholder`">
                  {{ locale.emptyText }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div :class="`${prefixCls}-body`" v-else>
        <table :class="tableClasses" :style="tableWidthStyle">
          <colgroup>
            <col v-if="selectable" :style="{ width: '62px', minWidth: '62px' }">
            <col v-for="col in normalizedColumns" :key="getColumnKey(col)" :style="getColStyle(col)">
          </colgroup>
          <thead v-if="showHeader" :class="`${prefixCls}-thead`">
            <tr>
              <th v-if="selectable" :class="`${prefixCls}-selection-column`">
                <checkbox
                  v-if="rowSelectionType === 'checkbox'"
                  :value="isAllSelected"
                  :indeterminate="isIndeterminate"
                  @change="handleSelectAll"
                ></checkbox>
              </th>
              <th
                v-for="col in normalizedColumns"
                :key="getColumnKey(col)"
                :class="getHeaderCellClass(col)"
                :style="getColStyle(col)"
                @click="handleHeaderClick(col)"
              >
                <span>{{ col.title }}</span>
                <span v-if="col.sorter" :class="`${prefixCls}-column-sorter`">
                  <span :class="getSorterClass('ascend', col)" @click.stop="handleSort(col, 'ascend')">
                    <icon type="caret-up"></icon>
                  </span>
                  <span :class="getSorterClass('descend', col)" @click.stop="handleSort(col, 'descend')">
                    <icon type="caret-down"></icon>
                  </span>
                </span>
                <filter-dropdown
                  v-if="col.filters && col.filters.length"
                  :filters="col.filters"
                  :prefixCls="prefixCls"
                  :selectedKeys="getColumnFilteredValue(col)"
                  @confirm="(keys) => handleFilter(col, keys)"
                  @reset="handleFilterReset(col)"
                ></filter-dropdown>
              </th>
            </tr>
          </thead>
          <tbody :class="`${prefixCls}-tbody`">
            <template v-if="displayData.length">
              <tr
                v-for="(record, index) in displayData"
                :key="getRowKey(record, index)"
                :class="getRowClass(record, index)"
                @click="handleRowClick(record, index)"
              >
                <td v-if="selectable" :class="`${prefixCls}-selection-column`">
                  <checkbox
                    v-if="rowSelectionType === 'checkbox'"
                    :value="isRowSelected(record, index)"
                    :disabled="getCheckboxDisabled(record, index)"
                    @change="(checked) => handleSelect(record, index, checked)"
                  ></checkbox>
                  <radio-inner
                    v-if="rowSelectionType === 'radio'"
                    :checked="isRowSelected(record, index)"
                    :disabled="getCheckboxDisabled(record, index)"
                    @change="() => handleSelect(record, index, true)"
                  ></radio-inner>
                </td>
                <td
                  v-for="col in normalizedColumns"
                  :key="getColumnKey(col)"
                  :class="getCellClass(col)"
                >
                  <template v-if="col.render">
                    <render-cell :render="col.render" :row="record" :column="col" :index="index"></render-cell>
                  </template>
                  <template v-else>
                    {{ getCellValue(record, col) }}
                  </template>
                </td>
              </tr>
            </template>
            <tr v-else>
              <td :colspan="totalColumns" :class="`${prefixCls}-placeholder`">
                {{ locale.emptyText }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="hasPagination" :class="`${prefixCls}-pagination`">
      <pagination
        :total="filterSortData.length"
        :current="paginationCurrent"
        :pageSize="paginationPageSize"
        @change-page="handlePageChange"
      ></pagination>
    </div>
  </div>
</template>

<script>
  import Checkbox from '../checkbox/checkbox'
  import Icon from '../icon'
  import Pagination from '../pagination/pagination'
  import FilterDropdown from './filter-dropdown'
  import RenderCell from './render-cell'
  import RadioInner from './radio-inner'
  import { oneOf } from '../_util/proptype'

  export default {
    name: 'atu-table',
    props: {
      dataSource: {
        type: Array,
        default: () => []
      },
      columns: {
        type: Array,
        default: () => []
      },
      rowKey: {
        type: [String, Function],
        default: 'key'
      },
      bordered: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return oneOf(value, ['default', 'middle', 'small'])
        }
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: [Object, Boolean],
        default: undefined
      },
      rowSelection: {
        type: Object,
        default: undefined
      },
      scroll: {
        type: Object,
        default: () => ({})
      },
      locale: {
        type: Object,
        default: () => ({
          emptyText: '暂无数据',
          loadingText: '加载中...',
          filterConfirm: '确定',
          filterReset: '重置'
        })
      },
      prefixCls: {
        type: String,
        default: 'ant-table'
      }
    },
    data () {
      return {
        sortColumn: null,
        sortOrder: null,
        filterStates: {},
        selectedRowKeys: this.rowSelection ? (this.rowSelection.selectedRowKeys || []) : [],
        paginationCurrent: 1,
        paginationPageSize: (this.pagination && this.pagination.pageSize) || 10
      }
    },
    computed: {
      normalizedColumns () {
        return this.columns.map((col, index) => {
          return Object.assign({}, col, {
            _key: col.key || col.dataIndex || index
          })
        })
      },
      wrapClasses () {
        const prefixCls = this.prefixCls + '-wrapper'
        return [
          prefixCls
        ]
      },
      tableClasses () {
        const prefixCls = this.prefixCls
        return [
          prefixCls,
          {
            [`${prefixCls}-bordered`]: this.bordered,
            [`${prefixCls}-middle`]: this.size === 'middle',
            [`${prefixCls}-small`]: this.size === 'small',
            [`${prefixCls}-fixed-header`]: !!this.scroll.y,
            [`${prefixCls}-has-loading`]: this.loading
          }
        ]
      },
      tableWidthStyle () {
        if (this.scroll && this.scroll.x) {
          return { width: typeof this.scroll.x === 'number' ? this.scroll.x + 'px' : this.scroll.x }
        }
        return {}
      },
      bodyScrollStyle () {
        if (this.scroll && this.scroll.y) {
          return {
            maxHeight: typeof this.scroll.y === 'number' ? this.scroll.y + 'px' : this.scroll.y,
            overflowY: 'auto'
          }
        }
        return {}
      },
      selectable () {
        return !!this.rowSelection
      },
      rowSelectionType () {
        return this.rowSelection ? (this.rowSelection.type || 'checkbox') : 'checkbox'
      },
      totalColumns () {
        return this.normalizedColumns.length + (this.selectable ? 1 : 0)
      },
      filterSortData () {
        let data = [].concat(this.dataSource)

        Object.keys(this.filterStates).forEach(key => {
          const filterValues = this.filterStates[key]
          if (filterValues && filterValues.length) {
            const col = this.normalizedColumns.find(c => this.getColumnKey(c) === key)
            if (col && col.onFilter) {
              data = data.filter(record => {
                return filterValues.some(value => col.onFilter(value, record))
              })
            }
          }
        })

        if (this.sortColumn && this.sortOrder) {
          const sorter = this.sortColumn.sorter
          if (typeof sorter === 'function') {
            data = data.sort((a, b) => {
              const result = sorter(a, b)
              return this.sortOrder === 'descend' ? -result : result
            })
          }
        }

        return data
      },
      displayData () {
        if (!this.hasPagination) {
          return this.filterSortData
        }
        const start = (this.paginationCurrent - 1) * this.paginationPageSize
        const end = start + this.paginationPageSize
        return this.filterSortData.slice(start, end)
      },
      hasPagination () {
        return this.pagination !== false
      },
      selectableData () {
        return this.dataSource.filter((record, index) => {
          return !this.getCheckboxDisabled(record, index)
        })
      },
      isAllSelected () {
        if (!this.selectableData.length) return false
        return this.selectableData.every((record, index) => {
          const key = this.getRowKey(record, index)
          return this.selectedRowKeys.indexOf(key) > -1
        })
      },
      isIndeterminate () {
        if (this.isAllSelected) return false
        return this.selectableData.some((record, index) => {
          const key = this.getRowKey(record, index)
          return this.selectedRowKeys.indexOf(key) > -1
        })
      }
    },
    watch: {
      'rowSelection.selectedRowKeys' (val) {
        if (val) {
          this.selectedRowKeys = [].concat(val)
        }
      },
      pagination: {
        handler (val) {
          if (val && val.current) {
            this.paginationCurrent = val.current
          }
          if (val && val.pageSize) {
            this.paginationPageSize = val.pageSize
          }
        },
        deep: true
      }
    },
    methods: {
      getColumnKey (col) {
        return col._key || col.key || col.dataIndex
      },
      getRowKey (record, index) {
        if (typeof this.rowKey === 'function') {
          return this.rowKey(record)
        }
        return record[this.rowKey] !== undefined ? record[this.rowKey] : index
      },
      getColStyle (col) {
        const style = {}
        if (col.width) {
          style.width = typeof col.width === 'number' ? col.width + 'px' : col.width
          style.minWidth = style.width
        }
        return style
      },
      getCellValue (record, col) {
        if (col.dataIndex) {
          return record[col.dataIndex]
        }
        return ''
      },
      getHeaderCellClass (col) {
        const classes = []
        if (col.className) classes.push(col.className)
        if (col.sorter) {
          classes.push(`${this.prefixCls}-column-has-sorters`)
        }
        if (col.filters && col.filters.length) {
          classes.push(`${this.prefixCls}-column-has-filters`)
        }
        if (col.align) {
          classes.push(`${this.prefixCls}-align-${col.align}`)
        }
        if (this.sortColumn && this.getColumnKey(this.sortColumn) === this.getColumnKey(col) && this.sortOrder) {
          classes.push(`${this.prefixCls}-column-sort`)
        }
        return classes
      },
      getCellClass (col) {
        const classes = []
        if (col.className) classes.push(col.className)
        if (col.align) {
          classes.push(`${this.prefixCls}-align-${col.align}`)
        }
        return classes
      },
      getRowClass (record, index) {
        const classes = [`${this.prefixCls}-row`]
        if (this.isRowSelected(record, index)) {
          classes.push(`${this.prefixCls}-row-selected`)
        }
        return classes
      },
      getSorterClass (order, col) {
        const active = this.sortColumn &&
          this.getColumnKey(this.sortColumn) === this.getColumnKey(col) &&
          this.sortOrder === order
        return [
          `${this.prefixCls}-column-sorter-${order}`,
          { active: active }
        ]
      },
      getColumnFilteredValue (col) {
        const key = this.getColumnKey(col)
        if (col.filteredValue !== undefined) {
          return col.filteredValue
        }
        return this.filterStates[key] || []
      },
      handleSort (col, order) {
        const columnKey = this.getColumnKey(col)
        const currentKey = this.sortColumn ? this.getColumnKey(this.sortColumn) : null

        if (currentKey === columnKey && this.sortOrder === order) {
          this.sortColumn = null
          this.sortOrder = null
        } else {
          this.sortColumn = col
          this.sortOrder = order
        }
        this.$emit('change', this.getPaginationInfo(), this.filterStates, { column: this.sortColumn, order: this.sortOrder, field: this.sortColumn ? this.sortColumn.dataIndex : null })
      },
      handleHeaderClick (col) {
        if (col.sorter) {
          if (this.sortColumn && this.getColumnKey(this.sortColumn) === this.getColumnKey(col)) {
            if (this.sortOrder === 'ascend') {
              this.handleSort(col, 'descend')
            } else if (this.sortOrder === 'descend') {
              this.sortColumn = null
              this.sortOrder = null
              this.$emit('change', this.getPaginationInfo(), this.filterStates, { column: null, order: null, field: null })
            } else {
              this.handleSort(col, 'ascend')
            }
          } else {
            this.handleSort(col, 'ascend')
          }
        }
      },
      handleFilter (col, selectedKeys) {
        const key = this.getColumnKey(col)
        this.$set(this.filterStates, key, selectedKeys)
        this.paginationCurrent = 1
        this.$emit('change', this.getPaginationInfo(), this.filterStates, { column: this.sortColumn, order: this.sortOrder, field: this.sortColumn ? this.sortColumn.dataIndex : null })
      },
      handleFilterReset (col) {
        const key = this.getColumnKey(col)
        this.$set(this.filterStates, key, [])
        this.$emit('change', this.getPaginationInfo(), this.filterStates, { column: this.sortColumn, order: this.sortOrder, field: this.sortColumn ? this.sortColumn.dataIndex : null })
      },
      handleSelect (record, index, checked) {
        const key = this.getRowKey(record, index)
        let newKeys

        if (this.rowSelectionType === 'radio') {
          newKeys = [key]
        } else {
          newKeys = [].concat(this.selectedRowKeys)
          const idx = newKeys.indexOf(key)
          if (checked && idx === -1) {
            newKeys.push(key)
          } else if (!checked && idx > -1) {
            newKeys.splice(idx, 1)
          }
        }

        this.selectedRowKeys = newKeys
        const selectedRows = this.dataSource.filter((r, i) => newKeys.indexOf(this.getRowKey(r, i)) > -1)

        if (this.rowSelection && this.rowSelection.onChange) {
          this.rowSelection.onChange(newKeys, selectedRows)
        }
        if (this.rowSelection && this.rowSelection.onSelect) {
          this.rowSelection.onSelect(record, checked, selectedRows)
        }
      },
      handleSelectAll (checked) {
        let newKeys

        if (checked) {
          const currentKeys = [].concat(this.selectedRowKeys)
          this.selectableData.forEach((record, index) => {
            const key = this.getRowKey(record, index)
            if (currentKeys.indexOf(key) === -1) {
              currentKeys.push(key)
            }
          })
          newKeys = currentKeys
        } else {
          const selectableKeys = this.selectableData.map((record, index) => this.getRowKey(record, index))
          newKeys = this.selectedRowKeys.filter(key => selectableKeys.indexOf(key) === -1)
        }

        this.selectedRowKeys = newKeys
        const selectedRows = this.dataSource.filter((r, i) => newKeys.indexOf(this.getRowKey(r, i)) > -1)

        if (this.rowSelection && this.rowSelection.onChange) {
          this.rowSelection.onChange(newKeys, selectedRows)
        }
        if (this.rowSelection && this.rowSelection.onSelectAll) {
          this.rowSelection.onSelectAll(checked, selectedRows)
        }
      },
      isRowSelected (record, index) {
        const key = this.getRowKey(record, index)
        return this.selectedRowKeys.indexOf(key) > -1
      },
      getCheckboxDisabled (record, index) {
        if (this.rowSelection && this.rowSelection.getCheckboxProps) {
          const props = this.rowSelection.getCheckboxProps(record)
          return props && props.disabled
        }
        return false
      },
      handlePageChange (page) {
        this.paginationCurrent = page
        this.$emit('change', this.getPaginationInfo(), this.filterStates, { column: this.sortColumn, order: this.sortOrder, field: this.sortColumn ? this.sortColumn.dataIndex : null })
      },
      handleRowClick (record, index) {
        this.$emit('row-click', record, index)
      },
      handleBodyScroll (e) {
        if (this.$refs.tableHeader) {
          this.$refs.tableHeader.scrollLeft = e.target.scrollLeft
        }
      },
      getPaginationInfo () {
        return {
          current: this.paginationCurrent,
          pageSize: this.paginationPageSize,
          total: this.filterSortData.length
        }
      }
    },
    components: {
      Checkbox,
      Icon,
      Pagination,
      FilterDropdown,
      RenderCell,
      RadioInner
    }
  }
</script>
