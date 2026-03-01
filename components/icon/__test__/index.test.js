import AIcon from '../index'
import { creatComponentVm, creatVueVm, renderVmString } from 'util.js'

describe('Icon', () => {
  it('should render icon with correct type class', () => {
    const vm = creatComponentVm(AIcon, { type: 'search' })
    expect(vm.$el.classList.contains('anticon')).toBeTruthy()
    expect(vm.$el.classList.contains('anticon-search')).toBeTruthy()
  })

  it('should render spinning icon when spin is true', () => {
    const vm = creatComponentVm(AIcon, { type: 'check', spin: true })
    expect(vm.$el.classList.contains('anticon-spin')).toBeTruthy()
  })

  it('should auto-spin for loading type', () => {
    const vm = creatComponentVm(AIcon, { type: 'loading' })
    expect(vm.$el.classList.contains('anticon-spin')).toBeTruthy()
  })

  it('should not spin by default for non-loading type', () => {
    const vm = creatComponentVm(AIcon, { type: 'search' })
    expect(vm.$el.classList.contains('anticon-spin')).toBeFalsy()
  })

  it('should match snapshot for basic icon', () => {
    const vm = creatVueVm({
      template: `<a-icon type="search" />`,
      components: {
        AIcon
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for spinning icon', () => {
    const vm = creatVueVm({
      template: `<a-icon type="loading" :spin="true" />`,
      components: {
        AIcon
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for custom spin icon', () => {
    const vm = creatVueVm({
      template: `<a-icon type="sync" :spin="true" />`,
      components: {
        AIcon
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
