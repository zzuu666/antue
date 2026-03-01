import AList from '../index'
import { creatVueVm, renderVmString } from 'util.js'

const AListItem = AList.Item

describe('List', () => {
  it('should render list', () => {
    const vm = creatVueVm({
      template: `<a-list></a-list>`,
      components: { AList }
    }).$mount()
    expect(vm.$el.classList.contains('ant-list')).toBeTruthy()
  })

  it('should have bordered class', () => {
    const vm = creatVueVm({
      template: `<a-list bordered></a-list>`,
      components: { AList }
    }).$mount()
    expect(vm.$el.classList.contains('ant-list-bordered')).toBeTruthy()
  })

  it('should render items', () => {
    const vm = creatVueVm({
      template: `
        <a-list>
          <a-list-item>Item 1</a-list-item>
          <a-list-item>Item 2</a-list-item>
          <a-list-item>Item 3</a-list-item>
        </a-list>
      `,
      components: { AList, AListItem }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-list-item')
    expect(items.length).toBe(3)
  })

  it('should have correct size classes', () => {
    const vmSmall = creatVueVm({
      template: `<a-list size="small"></a-list>`,
      components: { AList }
    }).$mount()
    expect(vmSmall.$el.classList.contains('ant-list-sm')).toBeTruthy()

    const vmLarge = creatVueVm({
      template: `<a-list size="large"></a-list>`,
      components: { AList }
    }).$mount()
    expect(vmLarge.$el.classList.contains('ant-list-lg')).toBeTruthy()
  })

  it('should match snapshot for basic list', () => {
    const vm = creatVueVm({
      template: `
        <a-list bordered>
          <a-list-item>Item 1</a-list-item>
          <a-list-item>Item 2</a-list-item>
        </a-list>
      `,
      components: { AList, AListItem }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for small list', () => {
    const vm = creatVueVm({
      template: `<a-list size="small" bordered><a-list-item>Item</a-list-item></a-list>`,
      components: { AList, AListItem }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
