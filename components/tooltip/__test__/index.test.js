import ATooltip from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Tooltip', () => {
  it('should render tooltip trigger element', () => {
    const vm = creatVueVm({
      template: `<a-tooltip title="Tooltip text"><span>Hover me</span></a-tooltip>`,
      components: {
        ATooltip
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
    expect(vm.$el.textContent).toBe('Hover me')
  })

  it('should render tooltip with different placements', () => {
    const vm = creatVueVm({
      template: `<a-tooltip title="Tip" placement="bottom"><span>Bottom</span></a-tooltip>`,
      components: {
        ATooltip
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should render tooltip with click trigger', () => {
    const vm = creatVueVm({
      template: `<a-tooltip title="Tip" trigger="click"><span>Click</span></a-tooltip>`,
      components: {
        ATooltip
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<a-tooltip title="Hello tooltip"><button>Hover me</button></a-tooltip>`,
      components: {
        ATooltip
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
