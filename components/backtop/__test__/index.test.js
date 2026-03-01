import ABackTop from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('BackTop', () => {
  it('should render backtop component', () => {
    const vm = creatVueVm({
      template: `<a-back-top />`,
      components: {
        ABackTop
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should accept custom visibilityHeight', () => {
    const vm = creatVueVm({
      template: `<a-back-top :visibilityHeight="200" />`,
      components: {
        ABackTop
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<a-back-top />`,
      components: {
        ABackTop
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
