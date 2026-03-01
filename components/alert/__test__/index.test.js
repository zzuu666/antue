import AAlert from '../index'
import { creatVueVm, nextTick, renderVmString } from 'util.js'

describe('Alert', () => {
  it('should render success alert', () => {
    const vm = creatVueVm({
      template: `<a-alert type="success" message="Success Tips"></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.classList.contains('ant-alert-success')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-alert-message').textContent.trim()).toBe('Success Tips')
  })

  it('should render info alert by default', () => {
    const vm = creatVueVm({
      template: `<a-alert message="Info"></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.classList.contains('ant-alert-info')).toBeTruthy()
  })

  it('should render warning alert', () => {
    const vm = creatVueVm({
      template: `<a-alert type="warning" message="Warning"></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.classList.contains('ant-alert-warning')).toBeTruthy()
  })

  it('should render error alert', () => {
    const vm = creatVueVm({
      template: `<a-alert type="error" message="Error"></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.classList.contains('ant-alert-error')).toBeTruthy()
  })

  it('should render description', () => {
    const vm = creatVueVm({
      template: `<a-alert message="Title" description="Detail description"></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.classList.contains('ant-alert-with-description')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-alert-description').textContent.trim()).toBe('Detail description')
  })

  it('should show icon when showIcon is true', () => {
    const vm = creatVueVm({
      template: `<a-alert type="success" message="Success" showIcon></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.querySelector('.ant-alert-icon')).toBeTruthy()
  })

  it('should be closable', done => {
    const vm = creatVueVm({
      template: `<a-alert message="Closable" closable @close="onClose"></a-alert>`,
      components: { AAlert },
      methods: {
        onClose () {}
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-alert-close-icon')).toBeTruthy()
    vm.$el.querySelector('.ant-alert-close-icon').click()
    nextTick(() => {
      done()
    })
  })

  it('should render banner mode', () => {
    const vm = creatVueVm({
      template: `<a-alert message="Banner" banner></a-alert>`,
      components: { AAlert }
    }).$mount()
    expect(vm.$el.classList.contains('ant-alert-banner')).toBeTruthy()
  })

  it('should match snapshot for success alert', () => {
    const vm = creatVueVm({
      template: `<a-alert type="success" message="Success Tips"></a-alert>`,
      components: { AAlert }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for alert with description', () => {
    const vm = creatVueVm({
      template: `<a-alert message="Title" description="Desc" showIcon></a-alert>`,
      components: { AAlert }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for closable alert', () => {
    const vm = creatVueVm({
      template: `<a-alert message="Closable" closable></a-alert>`,
      components: { AAlert }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for banner alert', () => {
    const vm = creatVueVm({
      template: `<a-alert message="Banner" banner></a-alert>`,
      components: { AAlert }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
