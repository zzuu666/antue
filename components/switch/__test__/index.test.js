import ASwitch from '../index'
import { creatVueVm, renderVmString, nextTick } from 'util.js'

describe('Switch', () => {
  it('should render switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="false" />`,
      components: {
        ASwitch
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-switch')).toBeTruthy()
  })

  it('should render checked switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="true" />`,
      components: {
        ASwitch
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-switch-checked')).toBeTruthy()
  })

  it('should render disabled switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="false" :disabled="true" />`,
      components: {
        ASwitch
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-switch-disabled')).toBeTruthy()
  })

  it('should render small switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="false" size="small" />`,
      components: {
        ASwitch
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-switch-small')).toBeTruthy()
  })

  it('should toggle on click', done => {
    const vm = creatVueVm({
      template: `<a-switch :checked="val" @change="onChange" />`,
      components: {
        ASwitch
      },
      data () {
        return { val: false }
      },
      methods: {
        onChange (v) {
          this.val = v
        }
      }
    }).$mount()
    vm.$el.click()
    nextTick(() => {
      expect(vm.val).toBe(true)
      done()
    })
  })

  it('should not toggle when disabled', done => {
    const vm = creatVueVm({
      template: `<a-switch :checked="val" :disabled="true" @change="onChange" />`,
      components: {
        ASwitch
      },
      data () {
        return { val: false }
      },
      methods: {
        onChange (v) {
          this.val = v
        }
      }
    }).$mount()
    vm.$el.click()
    nextTick(() => {
      expect(vm.val).toBe(false)
      done()
    })
  })

  it('should display on/off text', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="true" on="ON" off="OFF" />`,
      components: {
        ASwitch
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-switch-inner').textContent.trim()).toBe('ON')
  })

  it('should match snapshot for unchecked switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="false" />`,
      components: {
        ASwitch
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for checked switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="true" />`,
      components: {
        ASwitch
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for disabled switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="false" :disabled="true" />`,
      components: {
        ASwitch
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for small switch', () => {
    const vm = creatVueVm({
      template: `<a-switch :checked="true" size="small" />`,
      components: {
        ASwitch
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
