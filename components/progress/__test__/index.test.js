import AProgress from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Progress', () => {
  it('should render line progress', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="30" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-progress-line')).toBeTruthy()
  })

  it('should render correct percent width', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="50" />`,
      components: {
        AProgress
      }
    }).$mount()
    const bg = vm.$el.querySelector('.ant-progress-bg')
    expect(bg.style.width).toBe('50%')
  })

  it('should show info by default', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="50" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-show-info')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-progress-text')).toBeTruthy()
  })

  it('should hide info when showInfo is false', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="50" :showInfo="false" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-show-info')).toBeFalsy()
  })

  it('should render success status when percent is 100', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="100" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-status-success')).toBeTruthy()
  })

  it('should render exception status', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="70" status="exception" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-status-exception')).toBeTruthy()
  })

  it('should render active status', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="70" status="active" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-status-active')).toBeTruthy()
  })

  it('should render circle progress', () => {
    const vm = creatVueVm({
      template: `<a-progress type="circle" :percent="75" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-circle')).toBeTruthy()
    expect(vm.$el.querySelector('svg')).toBeTruthy()
  })

  it('should render dashboard progress', () => {
    const vm = creatVueVm({
      template: `<a-progress type="dashboard" :percent="75" />`,
      components: {
        AProgress
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-progress-circle')).toBeTruthy()
  })

  it('should use custom format', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="75" :format="fmt" />`,
      components: {
        AProgress
      },
      methods: {
        fmt (p) {
          return p + ' Days'
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-progress-text').textContent.trim()).toBe('75 Days')
  })

  it('should match snapshot for line progress', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="50" />`,
      components: {
        AProgress
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for circle progress', () => {
    const vm = creatVueVm({
      template: `<a-progress type="circle" :percent="75" />`,
      components: {
        AProgress
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for dashboard progress', () => {
    const vm = creatVueVm({
      template: `<a-progress type="dashboard" :percent="60" />`,
      components: {
        AProgress
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for exception status', () => {
    const vm = creatVueVm({
      template: `<a-progress :percent="70" status="exception" />`,
      components: {
        AProgress
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
