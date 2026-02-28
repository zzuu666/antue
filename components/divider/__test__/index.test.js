import Divider from '../index'
import { creatComponentVm, creatVueVm } from 'util.js'

describe('Divider', () => {
  it('should render horizontal divider by default', () => {
    const vm = creatComponentVm(Divider, {})
    expect(vm.$el.classList.contains('ant-divider')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-divider-horizontal')).toBeTruthy()
  })

  it('should render vertical divider', () => {
    const vm = creatComponentVm(Divider, { type: 'vertical' })
    expect(vm.$el.classList.contains('ant-divider-vertical')).toBeTruthy()
  })

  it('should render dashed divider', () => {
    const vm = creatComponentVm(Divider, { dashed: true })
    expect(vm.$el.classList.contains('ant-divider-dashed')).toBeTruthy()
  })

  it('should render divider with text', () => {
    const vm = creatVueVm({
      template: `<divider>Text</divider>`,
      components: { Divider }
    }).$mount()
    expect(vm.$el.classList.contains('ant-divider-with-text')).toBeTruthy()
    const innerText = vm.$el.querySelector('.ant-divider-inner-text')
    expect(innerText).not.toBeNull()
    expect(innerText.textContent).toBe('Text')
  })
})
