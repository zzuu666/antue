import ADrawer from '../index'
import { creatVueVm, nextTick, renderVmString } from 'util.js'

describe('Drawer', () => {
  it('should render when visible', () => {
    const vm = creatVueVm({
      template: `<a-drawer :visible="true" title="Test Drawer"><p>Content</p></a-drawer>`,
      components: { ADrawer }
    }).$mount()
    expect(vm.$el.querySelector('.ant-drawer')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-drawer-title').textContent.trim()).toBe('Test Drawer')
    expect(vm.$el.querySelector('.ant-drawer-body').textContent.trim()).toBe('Content')
  })

  it('should apply placement classes', () => {
    const vm = creatVueVm({
      template: `<a-drawer :visible="true" placement="left"><p>Left</p></a-drawer>`,
      components: { ADrawer }
    }).$mount()
    expect(vm.$el.classList.contains('ant-drawer-left')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-drawer-left')).toBeTruthy()
  })

  it('should emit close event on close button click', done => {
    let closed = false
    const vm = creatVueVm({
      template: `<a-drawer :visible="true" title="Close" @close="handleClose"><p>Content</p></a-drawer>`,
      components: { ADrawer },
      methods: {
        handleClose () {
          closed = true
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-drawer-close').click()
    nextTick(() => {
      expect(closed).toBe(true)
      done()
    })
  })

  it('should apply custom width', () => {
    const vm = creatVueVm({
      template: `<a-drawer :visible="true" :width="400"><p>Content</p></a-drawer>`,
      components: { ADrawer }
    }).$mount()
    expect(vm.$el.querySelector('.ant-drawer').style.width).toBe('400px')
  })

  it('should match snapshot for right drawer', () => {
    const vm = creatVueVm({
      template: `<a-drawer :visible="true" title="Right Drawer"><p>Content</p></a-drawer>`,
      components: { ADrawer }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for left drawer', () => {
    const vm = creatVueVm({
      template: `<a-drawer :visible="true" title="Left" placement="left"><p>Left</p></a-drawer>`,
      components: { ADrawer }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
