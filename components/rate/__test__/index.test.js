import ARate from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Rate', () => {
  it('should render rate', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="3" />`,
      components: {
        ARate
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-rate')).toBeTruthy()
  })

  it('should render 5 stars by default', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="0" />`,
      components: {
        ARate
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.ant-rate-star').length).toBe(5)
  })

  it('should render custom count of stars', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="0" :count="3" />`,
      components: {
        ARate
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.ant-rate-star').length).toBe(3)
  })

  it('should render full stars for value', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="3" />`,
      components: {
        ARate
      }
    }).$mount()
    const stars = vm.$el.querySelectorAll('.ant-rate-star')
    expect(stars[0].classList.contains('ant-rate-star-full')).toBeTruthy()
    expect(stars[1].classList.contains('ant-rate-star-full')).toBeTruthy()
    expect(stars[2].classList.contains('ant-rate-star-full')).toBeTruthy()
    expect(stars[3].classList.contains('ant-rate-star-zero')).toBeTruthy()
  })

  it('should render disabled rate', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="3" :disabled="true" />`,
      components: {
        ARate
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-rate-disabled')).toBeTruthy()
  })

  it('should render half star when allowHalf', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="2.5" :allowHalf="true" />`,
      components: {
        ARate
      }
    }).$mount()
    const stars = vm.$el.querySelectorAll('.ant-rate-star')
    expect(stars[2].classList.contains('ant-rate-star-half')).toBeTruthy()
  })

  it('should match snapshot for basic rate', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="3" />`,
      components: {
        ARate
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for half star rate', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="2.5" :allowHalf="true" />`,
      components: {
        ARate
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for disabled rate', () => {
    const vm = creatVueVm({
      template: `<a-rate :value="4" :disabled="true" />`,
      components: {
        ARate
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
