import ATree from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('Tree', () => {
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'leaf 1',
          key: '0-0-0'
        },
        {
          title: 'leaf 2',
          key: '0-0-1'
        }
      ]
    },
    {
      title: 'parent 2',
      key: '0-1'
    }
  ]

  it('should render tree', () => {
    const vm = creatVueVm({
      template: `<a-tree :treeData="treeData"></a-tree>`,
      components: { ATree },
      data () {
        return { treeData: treeData }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tree')).toBeTruthy()
    expect(vm.$el.querySelectorAll('.ant-tree-node-content-wrapper').length).toBeGreaterThanOrEqual(2)
  })

  it('should expand and collapse nodes', done => {
    const vm = creatVueVm({
      template: `<a-tree :treeData="treeData" defaultExpandAll></a-tree>`,
      components: { ATree },
      data () {
        return { treeData: treeData }
      }
    }).$mount()
    nextTick(() => {
      const childNodes = vm.$el.querySelectorAll('.ant-tree-child-tree')
      expect(childNodes.length).toBeGreaterThanOrEqual(1)
      const switcher = vm.$el.querySelector('.ant-tree-switcher_open')
      expect(switcher).toBeTruthy()
      switcher.click()
      nextTick(() => {
        done()
      })
    })
  })

  it('should handle checkable mode', done => {
    let checkedResult = null
    const vm = creatVueVm({
      template: `<a-tree :treeData="treeData" checkable defaultExpandAll @check="handleCheck"></a-tree>`,
      components: { ATree },
      data () {
        return { treeData: treeData }
      },
      methods: {
        handleCheck (checkedKeys, info) {
          checkedResult = checkedKeys
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tree-checkable')).toBeTruthy()
    nextTick(() => {
      const checkbox = vm.$el.querySelector('.ant-tree-checkbox')
      expect(checkbox).toBeTruthy()
      checkbox.click()
      nextTick(() => {
        expect(checkedResult).toBeTruthy()
        expect(checkedResult.length).toBe(1)
        done()
      })
    })
  })
})
