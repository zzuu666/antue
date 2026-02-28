import ATreeSelect from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('TreeSelect', () => {
  it('should render tree select', () => {
    const vm = creatVueVm({
      template: `<a-tree-select :treeData="treeData" placeholder="请选择"></a-tree-select>`,
      components: { ATreeSelect },
      data () {
        return {
          treeData: [
            {
              title: 'Node 1',
              value: '1',
              key: '1',
              children: [
                { title: 'Child 1', value: '1-1', key: '1-1' }
              ]
            },
            { title: 'Node 2', value: '2', key: '2' }
          ]
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-select')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-select-selection--single')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-select-selection__placeholder').textContent.trim()).toBe('请选择')
  })

  it('should open dropdown with tree on click', done => {
    const vm = creatVueVm({
      template: `<a-tree-select :treeData="treeData"></a-tree-select>`,
      components: { ATreeSelect },
      data () {
        return {
          treeData: [
            { title: 'Node 1', value: '1', key: '1' },
            { title: 'Node 2', value: '2', key: '2' }
          ]
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-select-selection').click()
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-select-open')).toBeTruthy()
      expect(vm.$el.querySelector('.ant-select-tree-node')).toBeTruthy()
      done()
    })
  })

  it('should select a value', done => {
    let selectedValue = null
    const vm = creatVueVm({
      template: `<a-tree-select :treeData="treeData" @change="handleChange"></a-tree-select>`,
      components: { ATreeSelect },
      data () {
        return {
          treeData: [
            { title: 'Node 1', value: '1', key: '1' },
            { title: 'Node 2', value: '2', key: '2' }
          ]
        }
      },
      methods: {
        handleChange (val) {
          selectedValue = val
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-select-selection').click()
    nextTick(() => {
      const titles = vm.$el.querySelectorAll('.ant-select-tree-node-title')
      expect(titles.length).toBe(2)
      titles[0].click()
      nextTick(() => {
        expect(selectedValue).toBe('1')
        done()
      })
    })
  })
})
