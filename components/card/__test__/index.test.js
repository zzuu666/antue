import ACard from '../index'
import CardGrid from '../grid'
import { creatVueVm, renderVmString } from 'util.js'

describe('Card', () => {
  it('should render basic card', () => {
    const vm = creatVueVm({
      template: `<a-card title="Card Title">Card content</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-card')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-card-bordered')).toBeTruthy()
  })

  it('should render card title', () => {
    const vm = creatVueVm({
      template: `<a-card title="My Title">Content</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-card-head')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-card-head-title').textContent.trim()).toBe('My Title')
  })

  it('should render card extra', () => {
    const vm = creatVueVm({
      template: `<a-card title="Title" extra="More">Content</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-card-extra').textContent.trim()).toBe('More')
  })

  it('should render card without border', () => {
    const vm = creatVueVm({
      template: `<a-card :bordered="false">Content</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-card-bordered')).toBeFalsy()
  })

  it('should render loading card', () => {
    const vm = creatVueVm({
      template: `<a-card :loading="true" title="Loading">Content</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-card-loading')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-card-loading-content')).toBeTruthy()
  })

  it('should render no hovering card', () => {
    const vm = creatVueVm({
      template: `<a-card :noHovering="true">Content</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-card-no-hovering')).toBeTruthy()
  })

  it('should render card body content', () => {
    const vm = creatVueVm({
      template: `<a-card>Hello World</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-card-body').textContent.trim()).toBe('Hello World')
  })

  it('should not render head when no title or extra', () => {
    const vm = creatVueVm({
      template: `<a-card>Content only</a-card>`,
      components: {
        ACard
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-card-head')).toBeFalsy()
  })

  it('should match snapshot for basic card', () => {
    const vm = creatVueVm({
      template: `<a-card title="Card Title">Card content</a-card>`,
      components: {
        ACard
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for loading card', () => {
    const vm = creatVueVm({
      template: `<a-card :loading="true" title="Loading">Content</a-card>`,
      components: {
        ACard
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for card with extra', () => {
    const vm = creatVueVm({
      template: `<a-card title="Title" extra="More">Body</a-card>`,
      components: {
        ACard
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('Card.Grid', () => {
  it('should render card grid', () => {
    const vm = creatVueVm({
      template: `<card-grid>Grid Content</card-grid>`,
      components: {
        CardGrid
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-card-grid')).toBeTruthy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<card-grid>Grid Content</card-grid>`,
      components: {
        CardGrid
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
