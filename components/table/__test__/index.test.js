import ATable from '../index'
import { creatVueVm, nextTick } from 'util.js'

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' }
]

const dataSource = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London' },
  { key: '3', name: 'Joe Black', age: 28, address: 'Sidney' }
]

describe('Table', () => {
  it('should render basic table with columns and data', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table')).toBeTruthy()
    expect(vm.$el.querySelectorAll('.ant-table-thead th').length).toBe(3)
    expect(vm.$el.querySelectorAll('.ant-table-tbody tr').length).toBe(3)
  })

  it('should render correct cell values', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    const cells = vm.$el.querySelectorAll('.ant-table-tbody tr:first-child td')
    expect(cells[0].textContent.trim()).toBe('John Brown')
    expect(cells[1].textContent.trim()).toBe('32')
    expect(cells[2].textContent.trim()).toBe('New York')
  })

  it('should render bordered table', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" bordered :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-bordered')).toBeTruthy()
  })

  it('should render middle size table', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" size="middle" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-middle')).toBeTruthy()
  })

  it('should render small size table', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" size="small" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-small')).toBeTruthy()
  })

  it('should display empty text when no data', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="[]" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-placeholder').textContent.trim()).toBe('暂无数据')
  })

  it('should display custom empty text via locale', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="[]" :pagination="false" :locale="locale"></a-table>`,
      components: { ATable },
      data () {
        return {
          columns,
          locale: { emptyText: 'No Data', loadingText: 'Loading...', filterConfirm: 'OK', filterReset: 'Reset' }
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-placeholder').textContent.trim()).toBe('No Data')
  })

  it('should hide header when showHeader is false', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" :showHeader="false" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-thead')).toBeFalsy()
  })

  it('should show loading state', () => {
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" loading :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-loading')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-table-loading-mask')).toBeTruthy()
  })

  it('should render column alignment', () => {
    const alignedColumns = [
      { title: 'Name', dataIndex: 'name', key: 'name', align: 'center' },
      { title: 'Age', dataIndex: 'age', key: 'age', align: 'right' }
    ]
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns: alignedColumns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-align-center')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-table-align-right')).toBeTruthy()
  })

  it('should render custom cell via render function', () => {
    const customColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render (h, text) {
          return h('strong', text)
        }
      }
    ]
    const vm = creatVueVm({
      template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { columns: customColumns, dataSource }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-table-tbody strong')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-table-tbody strong').textContent).toBe('John Brown')
  })

  it('should support rowKey as string', () => {
    const data = [
      { id: 'a', name: 'A' },
      { id: 'b', name: 'B' }
    ]
    const cols = [{ title: 'Name', dataIndex: 'name', key: 'name' }]
    const vm = creatVueVm({
      template: `<a-table :columns="cols" :dataSource="data" rowKey="id" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { cols, data }
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.ant-table-tbody tr').length).toBe(2)
  })

  it('should support rowKey as function', () => {
    const data = [
      { id: 'a', name: 'A' },
      { id: 'b', name: 'B' }
    ]
    const cols = [{ title: 'Name', dataIndex: 'name', key: 'name' }]
    const vm = creatVueVm({
      template: `<a-table :columns="cols" :dataSource="data" :rowKey="rowKeyFn" :pagination="false"></a-table>`,
      components: { ATable },
      data () {
        return { cols, data }
      },
      methods: {
        rowKeyFn (record) {
          return record.id
        }
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.ant-table-tbody tr').length).toBe(2)
  })

  describe('Sorting', () => {
    it('should render sorter icons for sortable columns', () => {
      const sortColumns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age', sorter: (a, b) => a.age - b.age }
      ]
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
        components: { ATable },
        data () {
          return { columns: sortColumns, dataSource }
        }
      }).$mount()
      expect(vm.$el.querySelector('.ant-table-column-sorter')).toBeTruthy()
      expect(vm.$el.querySelector('.ant-table-column-has-sorters')).toBeTruthy()
    })

    it('should sort data when clicking sort icon', done => {
      const sortColumns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age', sorter: (a, b) => a.age - b.age }
      ]
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" ref="table"></a-table>`,
        components: { ATable },
        data () {
          return { columns: sortColumns, dataSource }
        }
      }).$mount()

      const ascendBtn = vm.$el.querySelector('.ant-table-column-sorter-ascend')
      ascendBtn.click()

      nextTick(() => {
        const firstCell = vm.$el.querySelector('.ant-table-tbody tr:first-child td:nth-child(2)')
        expect(firstCell.textContent.trim()).toBe('28')
        done()
      })
    })
  })

  describe('Selection', () => {
    it('should render selection checkboxes', () => {
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" :rowSelection="rowSelection"></a-table>`,
        components: { ATable },
        data () {
          return {
            columns,
            dataSource,
            rowSelection: {
              selectedRowKeys: [],
              onChange () {}
            }
          }
        }
      }).$mount()
      expect(vm.$el.querySelector('.ant-table-selection-column')).toBeTruthy()
      expect(vm.$el.querySelectorAll('.ant-checkbox-wrapper').length).toBe(4)
    })

    it('should select row when clicking checkbox', done => {
      let selectedKeys = []
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" :rowSelection="rowSelection"></a-table>`,
        components: { ATable },
        data () {
          return {
            columns,
            dataSource,
            rowSelection: {
              selectedRowKeys: [],
              onChange (keys) {
                selectedKeys = keys
              }
            }
          }
        }
      }).$mount()

      const firstCheckbox = vm.$el.querySelectorAll('.ant-table-tbody .ant-checkbox')[0]
      firstCheckbox.click()

      nextTick(() => {
        expect(selectedKeys).toEqual(['1'])
        done()
      })
    })

    it('should select all rows when clicking header checkbox', done => {
      let selectedKeys = []
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" :rowSelection="rowSelection"></a-table>`,
        components: { ATable },
        data () {
          return {
            columns,
            dataSource,
            rowSelection: {
              selectedRowKeys: [],
              onChange (keys) {
                selectedKeys = keys
              }
            }
          }
        }
      }).$mount()

      const headerCheckbox = vm.$el.querySelector('.ant-table-thead .ant-checkbox')
      headerCheckbox.click()

      nextTick(() => {
        expect(selectedKeys.length).toBe(3)
        expect(selectedKeys).toEqual(['1', '2', '3'])
        done()
      })
    })

    it('should render radio selection type', () => {
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" :rowSelection="rowSelection"></a-table>`,
        components: { ATable },
        data () {
          return {
            columns,
            dataSource,
            rowSelection: {
              type: 'radio',
              selectedRowKeys: [],
              onChange () {}
            }
          }
        }
      }).$mount()
      expect(vm.$el.querySelector('.ant-radio')).toBeTruthy()
    })

    it('should disable checkbox via getCheckboxProps', () => {
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" :rowSelection="rowSelection"></a-table>`,
        components: { ATable },
        data () {
          return {
            columns,
            dataSource,
            rowSelection: {
              selectedRowKeys: [],
              getCheckboxProps (record) {
                return { disabled: record.name === 'Jim Green' }
              },
              onChange () {}
            }
          }
        }
      }).$mount()
      const checkboxes = vm.$el.querySelectorAll('.ant-table-tbody .ant-checkbox')
      expect(checkboxes[1].classList.contains('ant-checkbox-disabled')).toBeTruthy()
    })
  })

  describe('Pagination', () => {
    it('should show pagination by default', () => {
      const largeData = Array.from({ length: 25 }, (_, i) => ({
        key: String(i + 1),
        name: 'User ' + (i + 1),
        age: 20 + i,
        address: 'City ' + (i + 1)
      }))
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource"></a-table>`,
        components: { ATable },
        data () {
          return { columns, dataSource: largeData }
        }
      }).$mount()
      expect(vm.$el.querySelector('.ant-table-pagination')).toBeTruthy()
      expect(vm.$el.querySelector('.ant-pagination')).toBeTruthy()
      expect(vm.$el.querySelectorAll('.ant-table-tbody tr').length).toBe(10)
    })

    it('should hide pagination when pagination is false', () => {
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
        components: { ATable },
        data () {
          return { columns, dataSource }
        }
      }).$mount()
      expect(vm.$el.querySelector('.ant-table-pagination')).toBeFalsy()
    })
  })

  describe('Filter', () => {
    it('should render filter icon for filterable columns', () => {
      const filterColumns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filters: [
            { text: 'John', value: 'John' },
            { text: 'Jim', value: 'Jim' }
          ],
          onFilter: (value, record) => record.name.indexOf(value) > -1
        },
        { title: 'Age', dataIndex: 'age', key: 'age' }
      ]
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false"></a-table>`,
        components: { ATable },
        data () {
          return { columns: filterColumns, dataSource }
        }
      }).$mount()
      expect(vm.$el.querySelector('.ant-table-filter-icon')).toBeTruthy()
    })
  })

  describe('Events', () => {
    it('should emit row-click event', done => {
      let clickedRecord = null
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" @row-click="handleClick"></a-table>`,
        components: { ATable },
        data () {
          return { columns, dataSource }
        },
        methods: {
          handleClick (record) {
            clickedRecord = record
          }
        }
      }).$mount()

      const firstRow = vm.$el.querySelector('.ant-table-tbody tr')
      firstRow.click()

      nextTick(() => {
        expect(clickedRecord).toBeTruthy()
        expect(clickedRecord.name).toBe('John Brown')
        done()
      })
    })

    it('should emit change event when sorting', done => {
      let changeArgs = null
      const sortColumns = [
        { title: 'Age', dataIndex: 'age', key: 'age', sorter: (a, b) => a.age - b.age }
      ]
      const vm = creatVueVm({
        template: `<a-table :columns="columns" :dataSource="dataSource" :pagination="false" @change="handleChange"></a-table>`,
        components: { ATable },
        data () {
          return { columns: sortColumns, dataSource }
        },
        methods: {
          handleChange (pagination, filters, sorter) {
            changeArgs = { pagination, filters, sorter }
          }
        }
      }).$mount()

      const th = vm.$el.querySelector('.ant-table-column-has-sorters')
      th.click()

      nextTick(() => {
        expect(changeArgs).toBeTruthy()
        expect(changeArgs.sorter.order).toBe('ascend')
        expect(changeArgs.sorter.field).toBe('age')
        done()
      })
    })
  })
})
