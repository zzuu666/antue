import AAvatar from '../index'
import { creatComponentVm, creatVueVm, renderVmString } from 'util.js'

describe('Avatar', () => {
  it('should render with default circle shape', () => {
    const vm = creatComponentVm(AAvatar, { icon: 'user' })
    expect(vm.$el.classList.contains('ant-avatar')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-avatar-circle')).toBeTruthy()
  })

  it('should render square shape', () => {
    const vm = creatComponentVm(AAvatar, { icon: 'user', shape: 'square' })
    expect(vm.$el.classList.contains('ant-avatar-square')).toBeTruthy()
  })

  it('should render large size', () => {
    const vm = creatComponentVm(AAvatar, { icon: 'user', size: 'large' })
    expect(vm.$el.classList.contains('ant-avatar-lg')).toBeTruthy()
  })

  it('should render small size', () => {
    const vm = creatComponentVm(AAvatar, { icon: 'user', size: 'small' })
    expect(vm.$el.classList.contains('ant-avatar-sm')).toBeTruthy()
  })

  it('should render icon avatar', () => {
    const vm = creatComponentVm(AAvatar, { icon: 'user' })
    expect(vm.$el.classList.contains('ant-avatar-icon')).toBeTruthy()
  })

  it('should render image avatar', () => {
    const vm = creatComponentVm(AAvatar, { src: 'https://example.com/avatar.png' })
    expect(vm.$el.classList.contains('ant-avatar-image')).toBeTruthy()
    expect(vm.$el.querySelector('img')).toBeTruthy()
  })

  it('should match snapshot for icon avatar', () => {
    const vm = creatVueVm({
      template: `<a-avatar icon="user" />`,
      components: {
        AAvatar
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for image avatar', () => {
    const vm = creatVueVm({
      template: `<a-avatar src="https://example.com/avatar.png" />`,
      components: {
        AAvatar
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for square large avatar', () => {
    const vm = creatVueVm({
      template: `<a-avatar icon="user" shape="square" size="large" />`,
      components: {
        AAvatar
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for text avatar', () => {
    const vm = creatVueVm({
      template: `<a-avatar>U</a-avatar>`,
      components: {
        AAvatar
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
