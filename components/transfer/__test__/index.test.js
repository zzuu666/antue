import ATransfer from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('Transfer', () => {
  const dataSource = [
    { key: '1', title: 'content1' },
    { key: '2', title: 'content2' },
    { key: '3', title: 'content3' },
    { key: '4', title: 'content4' }
  ]

  it('should render two panels', () => {
    const vm = creatVueVm({
      template: `<a-transfer :dataSource="dataSource" :targetKeys="targetKeys"></a-transfer>`,
      components: { ATransfer },
      data () {
        return {
          dataSource: dataSource,
          targetKeys: ['3']
        }
      }
    }).$mount()
    const lists = vm.$el.querySelectorAll('.ant-transfer-list')
    expect(lists.length).toBe(2)
  })

  it('should render items in correct panels', () => {
    const vm = creatVueVm({
      template: `<a-transfer :dataSource="dataSource" :targetKeys="targetKeys"></a-transfer>`,
      components: { ATransfer },
      data () {
        return {
          dataSource: dataSource,
          targetKeys: ['3']
        }
      }
    }).$mount()
    const lists = vm.$el.querySelectorAll('.ant-transfer-list')
    const sourceItems = lists[0].querySelectorAll('.ant-transfer-list-content-item')
    const targetItems = lists[1].querySelectorAll('.ant-transfer-list-content-item')
    expect(sourceItems.length).toBe(3)
    expect(targetItems.length).toBe(1)
  })

  it('should move items between panels', done => {
    let changedTargetKeys = null
    const vm = creatVueVm({
      template: `<a-transfer :dataSource="dataSource" :targetKeys="targetKeys" @change="handleChange"></a-transfer>`,
      components: { ATransfer },
      data () {
        return {
          dataSource: dataSource,
          targetKeys: []
        }
      },
      methods: {
        handleChange (targetKeys, direction, moveKeys) {
          changedTargetKeys = targetKeys
        }
      }
    }).$mount()
    const sourceCheckboxes = vm.$el.querySelectorAll('.ant-transfer-list')[0].querySelectorAll('.ant-transfer-list-content-item .ant-checkbox-wrapper')
    if (sourceCheckboxes.length > 0) {
      const checkboxSpan = sourceCheckboxes[0].querySelector('.ant-checkbox')
      checkboxSpan.click()
    }
    nextTick(() => {
      const moveBtn = vm.$el.querySelectorAll('.ant-transfer-operation-btn')[0]
      moveBtn.click()
      nextTick(() => {
        expect(changedTargetKeys).toBeTruthy()
        expect(changedTargetKeys.length).toBe(1)
        done()
      })
    })
  })
})
