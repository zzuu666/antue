import Tabs from '../index'
import Pane from '../pane'
import { creatVueVm, renderVmString } from 'util.js'

describe('Tabs', () => {
  it('should render tabs', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tabs')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-tabs-line')).toBeTruthy()
  })

  it('should render tabs with card type', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1" type="card">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tabs-card')).toBeTruthy()
  })

  it('should render tabs with small size', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1" size="small">
        <a-pane tab="Tab 1" index="1">Content</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tabs-mini')).toBeTruthy()
  })

  it('should render tab bar', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-tabs-bar')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-tabs-content')).toBeTruthy()
  })

  it('should render tab pane content', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    }).$mount()
    const panes = vm.$el.querySelectorAll('.ant-tabs-tabpane')
    expect(panes.length).toBe(2)
  })

  it('should render active tab pane', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    }).$mount()
    const activePane = vm.$el.querySelector('.ant-tabs-tabpane-active')
    expect(activePane).toBeTruthy()
  })

  it('should match snapshot for line tabs', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for card tabs', () => {
    const vm = creatVueVm({
      template: `<a-tabs active="1" type="card">
        <a-pane tab="Tab 1" index="1">Content 1</a-pane>
        <a-pane tab="Tab 2" index="2">Content 2</a-pane>
      </a-tabs>`,
      components: {
        ATabs: Tabs,
        APane: Pane
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
