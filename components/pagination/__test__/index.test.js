import APagination from '../index'
import { creatVueVm, renderVmString, nextTick } from 'util.js'

describe('Pagination', () => {
  it('should render pagination', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="50" />`,
      components: {
        APagination
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-pagination')).toBeTruthy()
  })

  it('should render correct number of pages', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :pageSize="10" />`,
      components: {
        APagination
      }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-pagination-item')
    expect(items.length).toBe(5)
  })

  it('should render active page', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :current="3" />`,
      components: {
        APagination
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-pagination-item-active')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-pagination-item-active a').textContent).toBe('3')
  })

  it('should disable prev button on first page', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :current="1" />`,
      components: {
        APagination
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-pagination-prev').classList.contains('ant-pagination-disabled')).toBeTruthy()
  })

  it('should disable next button on last page', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :pageSize="10" :current="5" />`,
      components: {
        APagination
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-pagination-next').classList.contains('ant-pagination-disabled')).toBeTruthy()
  })

  it('should change page on click', done => {
    let currentPage = null
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :current="1" @change-page="onPageChange" />`,
      components: {
        APagination
      },
      methods: {
        onPageChange (page) {
          currentPage = page
        }
      }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-pagination-item')
    items[2].click()
    nextTick(() => {
      expect(currentPage).toBe(3)
      done()
    })
  })

  it('should navigate to next page', done => {
    let currentPage = null
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :current="1" @change-page="onPageChange" />`,
      components: {
        APagination
      },
      methods: {
        onPageChange (page) {
          currentPage = page
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-pagination-next').click()
    nextTick(() => {
      expect(currentPage).toBe(2)
      done()
    })
  })

  it('should show jump prev/next for many pages', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="500" :current="10" />`,
      components: {
        APagination
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-pagination-jump-prev')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-pagination-jump-next')).toBeTruthy()
  })

  it('should match snapshot for basic pagination', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="50" :current="1" />`,
      components: {
        APagination
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for pagination with many pages', () => {
    const vm = creatVueVm({
      template: `<a-pagination :total="500" :current="10" />`,
      components: {
        APagination
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
