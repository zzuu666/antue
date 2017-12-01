import AtuMenu from '../index'
import { creatVueVm } from 'util.js'

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

  // it('Submenu Itemgroup Item should inherit menu\'s property.', () => {
  //   const vm = creatVueVm({
  //     template: `
  //     <atu-menu>
  //       <atu-menu-submenu ref="submenu"></atu-menu-submenu>
  //       <atu-menu-item index="1" ref="item"></atu-menu-item>
  //     </atu-menu>
  //     `,
  //     components: {
  //       AtuMenu,
  //       AtuMenuItem,
  //       AtuMenuSubmenu,
  //       AtuMenuItemGroup
  //     }
  //   }).$mount()
  // })
})
