import AModal from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('Modal', () => {
  it('should render modal when visible', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Test Modal"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-modal-title').textContent.trim()).toBe('Test Modal')
    expect(vm.$el.querySelector('.ant-modal-body').textContent.trim()).toBe('Content')
  })

  it('should not render when not visible', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="false" title="Hidden"><p>Hidden</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.innerHTML).toBeFalsy()
  })

  it('should render mask by default', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Mask"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal-mask')).toBeTruthy()
  })

  it('should render close button by default', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Close"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal-close')).toBeTruthy()
  })

  it('should not render close button when closable is false', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="No Close" :closable="false"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal-close')).toBeFalsy()
  })

  it('should render footer with ok and cancel buttons', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Footer"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal-footer')).toBeTruthy()
    const buttons = vm.$el.querySelectorAll('.ant-modal-footer .ant-btn')
    expect(buttons.length).toBe(2)
    expect(buttons[0].textContent.trim()).toBe('取消')
    expect(buttons[1].textContent.trim()).toBe('确定')
  })

  it('should hide footer when footer is false', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="No Footer" :footer="false"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal-footer')).toBeFalsy()
  })

  it('should emit cancel event on close click', done => {
    let cancelled = false
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Cancel" @cancel="handleCancel"><p>Content</p></a-modal>`,
      components: { AModal },
      methods: {
        handleCancel () {
          cancelled = true
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-modal-close').click()
    nextTick(() => {
      expect(cancelled).toBe(true)
      done()
    })
  })

  it('should emit ok event on ok click', done => {
    let confirmed = false
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="OK" @ok="handleOk"><p>Content</p></a-modal>`,
      components: { AModal },
      methods: {
        handleOk () {
          confirmed = true
        }
      }
    }).$mount()
    vm.$el.querySelectorAll('.ant-modal-footer .ant-btn')[1].click()
    nextTick(() => {
      expect(confirmed).toBe(true)
      done()
    })
  })

  it('should apply custom width', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Width" :width="800"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    expect(vm.$el.querySelector('.ant-modal').style.width).toBe('800px')
  })

  it('should apply custom okText and cancelText', () => {
    const vm = creatVueVm({
      template: `<a-modal :visible="true" title="Custom" okText="OK" cancelText="Cancel"><p>Content</p></a-modal>`,
      components: { AModal }
    }).$mount()
    const buttons = vm.$el.querySelectorAll('.ant-modal-footer .ant-btn')
    expect(buttons[0].textContent.trim()).toBe('Cancel')
    expect(buttons[1].textContent.trim()).toBe('OK')
  })
})
