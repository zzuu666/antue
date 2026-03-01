import APopover from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Popover', () => {
  it('should render popover trigger element', () => {
    const vm = creatVueVm({
      template: `<a-popover title="Title" content="Content"><span>Hover me</span></a-popover>`,
      components: {
        APopover
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
    expect(vm.$el.textContent).toBe('Hover me')
  })

  it('should render with different placement', () => {
    const vm = creatVueVm({
      template: `<a-popover title="Title" content="Content" placement="right"><span>Right</span></a-popover>`,
      components: {
        APopover
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should render with click trigger', () => {
    const vm = creatVueVm({
      template: `<a-popover title="Title" content="Content" trigger="click"><span>Click</span></a-popover>`,
      components: {
        APopover
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<a-popover title="Title" content="Content"><button>Hover me</button></a-popover>`,
      components: {
        APopover
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
