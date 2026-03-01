import Input from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Input', () => {
  it('should render basic input', () => {
    const vm = creatVueVm({
      template: `<a-input value="test" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input')).toBeTruthy()
  })

  it('should render disabled input', () => {
    const vm = creatVueVm({
      template: `<a-input :disabled="true" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input-disabled')).toBeTruthy()
  })

  it('should render large input', () => {
    const vm = creatVueVm({
      template: `<a-input size="large" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    const input = vm.$el.tagName === 'INPUT' ? vm.$el : vm.$el.querySelector('input')
    expect(input.classList.contains('ant-input-lg')).toBeTruthy()
  })

  it('should render small input', () => {
    const vm = creatVueVm({
      template: `<a-input size="small" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    const input = vm.$el.tagName === 'INPUT' ? vm.$el : vm.$el.querySelector('input')
    expect(input.classList.contains('ant-input-sm')).toBeTruthy()
  })

  it('should render input with prefix', () => {
    const vm = creatVueVm({
      template: `<a-input prefix="user" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input-affix-wrapper')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-input-prefix')).toBeTruthy()
  })

  it('should render input with suffix', () => {
    const vm = creatVueVm({
      template: `<a-input suffix="search" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input-affix-wrapper')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-input-suffix')).toBeTruthy()
  })

  it('should render input with addon before', () => {
    const vm = creatVueVm({
      template: `<a-input addonBefore="http://" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input-group-wrapper')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-input-group-addon')).toBeTruthy()
  })

  it('should render input with addon after', () => {
    const vm = creatVueVm({
      template: `<a-input addonAfter=".com" />`,
      components: {
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-input-group-addon')).toBeTruthy()
  })

  it('should match snapshot for basic input', () => {
    const vm = creatVueVm({
      template: `<a-input placeholder="Enter text" />`,
      components: {
        AInput: Input
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for input with addons', () => {
    const vm = creatVueVm({
      template: `<a-input addonBefore="http://" addonAfter=".com" />`,
      components: {
        AInput: Input
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for input with prefix and suffix', () => {
    const vm = creatVueVm({
      template: `<a-input prefix="user" suffix="search" />`,
      components: {
        AInput: Input
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('Input.Search', () => {
  it('should render search input', () => {
    const vm = creatVueVm({
      template: `<a-input-search placeholder="Search" />`,
      components: {
        AInputSearch: Input.Search
      }
    }).$mount()
    expect(vm.$el.querySelector('.anticon-search')).toBeTruthy()
  })

  it('should match snapshot for search input', () => {
    const vm = creatVueVm({
      template: `<a-input-search placeholder="Search" />`,
      components: {
        AInputSearch: Input.Search
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('Input.TextArea', () => {
  it('should render textarea', () => {
    const vm = creatVueVm({
      template: `<a-textarea />`,
      components: {
        ATextarea: Input.TextArea
      }
    }).$mount()
    expect(vm.$el.tagName).toBe('TEXTAREA')
    expect(vm.$el.classList.contains('ant-input')).toBeTruthy()
  })

  it('should match snapshot for textarea', () => {
    const vm = creatVueVm({
      template: `<a-textarea />`,
      components: {
        ATextarea: Input.TextArea
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('Input.Group', () => {
  it('should render input group', () => {
    const vm = creatVueVm({
      template: `<a-input-group><a-input /></a-input-group>`,
      components: {
        AInputGroup: Input.Group,
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input-group')).toBeTruthy()
  })

  it('should render compact group', () => {
    const vm = creatVueVm({
      template: `<a-input-group :compact="true"><a-input /></a-input-group>`,
      components: {
        AInputGroup: Input.Group,
        AInput: Input
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-input-group-compact')).toBeTruthy()
  })

  it('should match snapshot for input group', () => {
    const vm = creatVueVm({
      template: `<a-input-group :compact="true"><a-input /><a-input /></a-input-group>`,
      components: {
        AInputGroup: Input.Group,
        AInput: Input
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
