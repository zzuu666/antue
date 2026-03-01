import ASlider from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Slider', () => {
  it('should render slider', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="30"></a-slider>`,
      components: { ASlider }
    }).$mount()
    expect(vm.$el.classList.contains('ant-slider')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-slider-rail')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-slider-track')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-slider-handle')).toBeTruthy()
  })

  it('should apply disabled class', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="30" disabled></a-slider>`,
      components: { ASlider }
    }).$mount()
    expect(vm.$el.classList.contains('ant-slider-disabled')).toBeTruthy()
  })

  it('should apply vertical class', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="30" vertical></a-slider>`,
      components: { ASlider }
    }).$mount()
    expect(vm.$el.classList.contains('ant-slider-vertical')).toBeTruthy()
  })

  it('should display correct track width for value', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="50"></a-slider>`,
      components: { ASlider }
    }).$mount()
    expect(vm.$el.querySelector('.ant-slider-track').style.width).toBe('50%')
  })

  it('should match snapshot for basic slider', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="30" />`,
      components: { ASlider }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for disabled slider', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="50" disabled />`,
      components: { ASlider }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for vertical slider', () => {
    const vm = creatVueVm({
      template: `<a-slider :value="30" vertical />`,
      components: { ASlider }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
