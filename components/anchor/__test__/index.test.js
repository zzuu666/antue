import AAnchor from '../index'
import { creatVueVm, nextTick } from 'util.js'

const AAnchorLink = AAnchor.Link

describe('Anchor', () => {
  it('should render anchor', () => {
    const vm = creatVueVm({
      template: `
        <a-anchor>
          <a-anchor-link href="#demo" title="Demo"></a-anchor-link>
        </a-anchor>
      `,
      components: { AAnchor, AAnchorLink }
    }).$mount()
    expect(vm.$el.querySelector('.ant-anchor-wrapper')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-anchor-ink')).toBeTruthy()
  })

  it('should render links', () => {
    const vm = creatVueVm({
      template: `
        <a-anchor>
          <a-anchor-link href="#section1" title="Section 1"></a-anchor-link>
          <a-anchor-link href="#section2" title="Section 2"></a-anchor-link>
        </a-anchor>
      `,
      components: { AAnchor, AAnchorLink }
    }).$mount()
    const links = vm.$el.querySelectorAll('.ant-anchor-link')
    expect(links.length).toBe(2)
    const titles = vm.$el.querySelectorAll('.ant-anchor-link-title')
    expect(titles[0].textContent.trim()).toBe('Section 1')
    expect(titles[1].textContent.trim()).toBe('Section 2')
    expect(titles[0].getAttribute('href')).toBe('#section1')
    expect(titles[1].getAttribute('href')).toBe('#section2')
  })

  it('should apply active link class', done => {
    const vm = creatVueVm({
      template: `
        <a-anchor>
          <a-anchor-link href="#active-test" title="Active Test"></a-anchor-link>
        </a-anchor>
      `,
      components: { AAnchor, AAnchorLink }
    }).$mount()
    const anchorComponent = vm.$children[0]
    anchorComponent.setCurrentLink('#active-test')
    nextTick(() => {
      expect(vm.$el.querySelector('.ant-anchor-link-title-active')).toBeTruthy()
      done()
    })
  })
})
