import ADropdown from '../index'
import AMenu from '../../menu'
import { creatVueVm, renderVmString } from 'util.js'

describe('Dropdown', () => {
  it('should render dropdown', () => {
    const vm = creatVueVm({
      template: `<a-dropdown trigger="click">
        <a>Dropdown</a>
        <a-menu slot="overlay">
          <a-menu-item>Item 1</a-menu-item>
        </a-menu>
      </a-dropdown>`,
      components: {
        ADropdown,
        AMenu,
        AMenuItem: AMenu.Item
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should render dropdown with correct class', () => {
    const vm = creatVueVm({
      template: `<a-dropdown trigger="click">
        <a>Click me</a>
        <a-menu slot="overlay">
          <a-menu-item>Action</a-menu-item>
        </a-menu>
      </a-dropdown>`,
      components: {
        ADropdown,
        AMenu,
        AMenuItem: AMenu.Item
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-dropdown')).toBeTruthy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<a-dropdown trigger="click">
        <a>Trigger</a>
        <a-menu slot="overlay">
          <a-menu-item>Item 1</a-menu-item>
          <a-menu-item>Item 2</a-menu-item>
        </a-menu>
      </a-dropdown>`,
      components: {
        ADropdown,
        AMenu,
        AMenuItem: AMenu.Item
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
