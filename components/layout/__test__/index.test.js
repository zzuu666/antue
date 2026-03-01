import Layout from '../index'
import { creatVueVm, renderVmString } from 'util.js'

const ALayout = Layout
const AHeader = Layout.Header
const AContent = Layout.Content
const AFooter = Layout.Footer
const ASider = Layout.Sider

describe('Layout', () => {
  it('should render basic layout', () => {
    const vm = creatVueVm({
      template: `<a-layout><a-header>Header</a-header><a-content>Content</a-content><a-footer>Footer</a-footer></a-layout>`,
      components: {
        ALayout,
        AHeader,
        AContent,
        AFooter
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-layout')).toBeTruthy()
  })

  it('should render header', () => {
    const vm = creatVueVm({
      template: `<a-layout><a-header>Header</a-header></a-layout>`,
      components: {
        ALayout,
        AHeader
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-layout-header')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-layout-header').textContent).toBe('Header')
  })

  it('should render content', () => {
    const vm = creatVueVm({
      template: `<a-layout><a-content>Main</a-content></a-layout>`,
      components: {
        ALayout,
        AContent
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-layout-content')).toBeTruthy()
  })

  it('should render footer', () => {
    const vm = creatVueVm({
      template: `<a-layout><a-footer>Footer</a-footer></a-layout>`,
      components: {
        ALayout,
        AFooter
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-layout-footer')).toBeTruthy()
  })

  it('should render has-sider class', () => {
    const vm = creatVueVm({
      template: `<a-layout :hasSider="true"><a-content>Content</a-content></a-layout>`,
      components: {
        ALayout,
        AContent
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-layout-has-sider')).toBeTruthy()
  })

  it('should match snapshot for full layout', () => {
    const vm = creatVueVm({
      template: `<a-layout><a-header>Header</a-header><a-content>Content</a-content><a-footer>Footer</a-footer></a-layout>`,
      components: {
        ALayout,
        AHeader,
        AContent,
        AFooter
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('Sider', () => {
  it('should render sider', () => {
    const vm = creatVueVm({
      template: `<a-layout :hasSider="true"><a-sider>Sider</a-sider><a-content>Content</a-content></a-layout>`,
      components: {
        ALayout,
        ASider,
        AContent
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-layout-sider')).toBeTruthy()
  })

  it('should render sider with custom width', () => {
    const vm = creatVueVm({
      template: `<a-layout :hasSider="true"><a-sider :width="300">Sider</a-sider><a-content>Content</a-content></a-layout>`,
      components: {
        ALayout,
        ASider,
        AContent
      }
    }).$mount()
    const sider = vm.$el.querySelector('.ant-layout-sider')
    expect(sider.style.width).toBe('300px')
  })

  it('should match snapshot for layout with sider', () => {
    const vm = creatVueVm({
      template: `<a-layout :hasSider="true"><a-sider>Sider</a-sider><a-layout><a-header>Header</a-header><a-content>Content</a-content></a-layout></a-layout>`,
      components: {
        ALayout,
        ASider,
        AHeader,
        AContent
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
