import AtuMenu from '../index'
import { creatVueVm, renderVmString } from 'util.js'

const AtuMenuItem = AtuMenu.Item
const AtuMenuSubmenu = AtuMenu.SubMenu
const AtuMenuItemGroup = AtuMenu.ItemGroup

describe('Menu', () => {
  it('Submenu Itemgroup Item should have prefixCls-item class.', () => {
    const vm = creatVueVm({
      template: `
      <atu-menu>
        <atu-menu-item index="1" ref="item"></atu-menu-item>
        <atu-menu-submenu ref="submenu"></atu-menu-submenu>
        <atu-menu-item-group ref="group"></atu-menu-item-group>
      </atu-menu>
      `,
      components: {
        AtuMenu,
        AtuMenuItem,
        AtuMenuSubmenu,
        AtuMenuItemGroup
      }
    }).$mount()
    expect(vm.$refs.item.$el.classList.contains('ant-menu-item')).toBeTruthy()
    expect(vm.$refs.submenu.$el.classList.contains('ant-menu-submenu')).toBeTruthy()
    expect(vm.$refs.group.$el.classList.contains('ant-menu-item-group')).toBeTruthy()
  })

  it('should render menu with correct mode class', () => {
    const vm = creatVueVm({
      template: `
      <atu-menu mode="horizontal">
        <atu-menu-item index="1">Item 1</atu-menu-item>
        <atu-menu-item index="2">Item 2</atu-menu-item>
      </atu-menu>
      `,
      components: {
        AtuMenu,
        AtuMenuItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-menu-horizontal')).toBeTruthy()
  })

  it('should render vertical menu', () => {
    const vm = creatVueVm({
      template: `
      <atu-menu mode="vertical">
        <atu-menu-item index="1">Item 1</atu-menu-item>
      </atu-menu>
      `,
      components: {
        AtuMenu,
        AtuMenuItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-menu-vertical')).toBeTruthy()
  })

  it('should render dark theme menu', () => {
    const vm = creatVueVm({
      template: `
      <atu-menu theme="dark">
        <atu-menu-item index="1">Item 1</atu-menu-item>
      </atu-menu>
      `,
      components: {
        AtuMenu,
        AtuMenuItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-menu-dark')).toBeTruthy()
  })

  it('should match snapshot for basic menu', () => {
    const vm = creatVueVm({
      template: `
      <atu-menu>
        <atu-menu-item index="1">Item 1</atu-menu-item>
        <atu-menu-item index="2">Item 2</atu-menu-item>
      </atu-menu>
      `,
      components: {
        AtuMenu,
        AtuMenuItem
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for menu with submenu', () => {
    const vm = creatVueVm({
      template: `
      <atu-menu>
        <atu-menu-submenu>
          <template slot="title">Sub Menu</template>
          <atu-menu-item index="1">Sub Item 1</atu-menu-item>
        </atu-menu-submenu>
      </atu-menu>
      `,
      components: {
        AtuMenu,
        AtuMenuItem,
        AtuMenuSubmenu
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
