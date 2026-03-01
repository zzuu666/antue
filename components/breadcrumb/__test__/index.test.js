import Breadcrumb from '../index'
import BreadcrumbItem from '../breadcrumb-item'
import { creatVueVm, renderVmString } from 'util.js'

describe('Breadcrumb', () => {
  it('should render breadcrumb', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-breadcrumb')).toBeTruthy()
  })

  it('should render default separator', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    }).$mount()
    const seps = vm.$el.querySelectorAll('.ant-breadcrumb-separator')
    expect(seps.length).toBe(2)
    expect(seps[0].textContent.trim()).toBe('/')
  })

  it('should render custom separator', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb separator=">">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    }).$mount()
    const sep = vm.$el.querySelector('.ant-breadcrumb-separator')
    expect(sep.textContent.trim()).toBe('>')
  })

  it('should render item with href as link', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb>
        <a-breadcrumb-item href="/">Home</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    }).$mount()
    expect(vm.$el.querySelector('a.ant-breadcrumb-link')).toBeTruthy()
  })

  it('should render item without href as span', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb>
        <a-breadcrumb-item>Text</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    }).$mount()
    expect(vm.$el.querySelector('span.ant-breadcrumb-link')).toBeTruthy()
  })

  it('should match snapshot for basic breadcrumb', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>Detail</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot with links', () => {
    const vm = creatVueVm({
      template: `<a-breadcrumb>
        <a-breadcrumb-item href="/">Home</a-breadcrumb-item>
        <a-breadcrumb-item href="/list">List</a-breadcrumb-item>
        <a-breadcrumb-item>Detail</a-breadcrumb-item>
      </a-breadcrumb>`,
      components: {
        ABreadcrumb: Breadcrumb,
        ABreadcrumbItem: BreadcrumbItem
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
