import ABadge from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Badge', () => {
  it('should match snapshot for success status', () => {
    const vm = creatVueVm({
      template: `<a-badge status="success" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for processing status', () => {
    const vm = creatVueVm({
      template: `<a-badge status="processing" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for error status', () => {
    const vm = creatVueVm({
      template: `<a-badge status="error" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for warning status', () => {
    const vm = creatVueVm({
      template: `<a-badge status="warning" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for default status', () => {
    const vm = creatVueVm({
      template: `<a-badge status="default" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should contain status class in rendered html', () => {
    const vm = creatVueVm({
      template: `<a-badge status="success" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toContain('ant-badge-status')
      expect(str).toContain('ant-badge-status-success')
    })
  })

  it('should contain error status class in rendered html', () => {
    const vm = creatVueVm({
      template: `<a-badge status="error" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toContain('ant-badge-status-error')
    })
  })

  it('should contain processing status dot in rendered html', () => {
    const vm = creatVueVm({
      template: `<a-badge status="processing" />`,
      components: {
        ABadge
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toContain('ant-badge-status-dot')
      expect(str).toContain('ant-badge-status-processing')
    })
  })
})
