import ACollapse from '../index'
import { creatVueVm, nextTick } from 'util.js'

const ACollapsePanel = ACollapse.Panel

describe('Collapse', () => {
  it('should render panels', () => {
    const vm = creatVueVm({
      template: `
        <a-collapse>
          <a-collapse-panel header="Header 1" panelKey="1"><p>Content 1</p></a-collapse-panel>
          <a-collapse-panel header="Header 2" panelKey="2"><p>Content 2</p></a-collapse-panel>
        </a-collapse>
      `,
      components: { ACollapse, ACollapsePanel }
    }).$mount()
    expect(vm.$el.classList.contains('ant-collapse')).toBeTruthy()
    expect(vm.$el.querySelectorAll('.ant-collapse-item').length).toBe(2)
    expect(vm.$el.querySelectorAll('.ant-collapse-item-header').length).toBe(2)
  })

  it('should work in accordion mode', done => {
    const vm = creatVueVm({
      template: `
        <a-collapse accordion :defaultActiveKey="['1']">
          <a-collapse-panel header="Header 1" panelKey="1"><p>Content 1</p></a-collapse-panel>
          <a-collapse-panel header="Header 2" panelKey="2"><p>Content 2</p></a-collapse-panel>
        </a-collapse>
      `,
      components: { ACollapse, ACollapsePanel }
    }).$mount()
    expect(vm.$el.querySelector('.ant-collapse-item-active')).toBeTruthy()
    vm.$el.querySelectorAll('.ant-collapse-item-header')[1].click()
    nextTick(() => {
      const activeItems = vm.$el.querySelectorAll('.ant-collapse-item-active')
      expect(activeItems.length).toBe(1)
      done()
    })
  })

  it('should show active panel', () => {
    const vm = creatVueVm({
      template: `
        <a-collapse :defaultActiveKey="['2']">
          <a-collapse-panel header="Header 1" panelKey="1"><p>Content 1</p></a-collapse-panel>
          <a-collapse-panel header="Header 2" panelKey="2"><p>Content 2</p></a-collapse-panel>
        </a-collapse>
      `,
      components: { ACollapse, ACollapsePanel }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-collapse-item')
    expect(items[0].classList.contains('ant-collapse-item-active')).toBeFalsy()
    expect(items[1].classList.contains('ant-collapse-item-active')).toBeTruthy()
  })

  it('should render disabled panel', () => {
    const vm = creatVueVm({
      template: `
        <a-collapse>
          <a-collapse-panel header="Header 1" panelKey="1" disabled><p>Content 1</p></a-collapse-panel>
        </a-collapse>
      `,
      components: { ACollapse, ACollapsePanel }
    }).$mount()
    expect(vm.$el.querySelector('.ant-collapse-item-disabled')).toBeTruthy()
  })
})
