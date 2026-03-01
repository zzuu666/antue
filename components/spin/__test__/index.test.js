import Spin from '../index'
import { creatComponentVm, creatVueVm, nextTick, renderVmString } from 'util.js'

describe('Spin', () => {
  it('should render correctly', () => {
    const vm = creatComponentVm(Spin, {})
    expect(vm.$el.classList.contains('ant-spin')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-spin-spinning')).toBeTruthy()
  })

  it('should have correct size class', () => {
    const smVm = creatComponentVm(Spin, { size: 'small' })
    expect(smVm.$el.classList.contains('ant-spin-sm')).toBeTruthy()

    const lgVm = creatComponentVm(Spin, { size: 'large' })
    expect(lgVm.$el.classList.contains('ant-spin-lg')).toBeTruthy()
  })

  it('should show tip text', () => {
    const vm = creatComponentVm(Spin, { tip: 'Loading...' })
    expect(vm.$el.classList.contains('ant-spin-show-text')).toBeTruthy()
    const textEl = vm.$el.querySelector('.ant-spin-text')
    expect(textEl).not.toBeNull()
    expect(textEl.textContent).toBe('Loading...')
  })

  it('should toggle spinning', (done) => {
    const vm = creatVueVm({
      template: `<spin :spinning="spinning"></spin>`,
      components: { Spin },
      data () {
        return { spinning: true }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-spin-spinning')).toBeTruthy()
    vm.spinning = false
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-spin-spinning')).toBeFalsy()
      done()
    })
  })

  it('should match snapshot for default spin', () => {
    const vm = creatVueVm({
      template: `<spin />`,
      components: { Spin }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for spin with tip', () => {
    const vm = creatVueVm({
      template: `<spin tip="Loading..." />`,
      components: { Spin }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for large spin', () => {
    const vm = creatVueVm({
      template: `<spin size="large" />`,
      components: { Spin }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
