import AtuTransition from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Transition', () => {
  it('should render transition with fade type', () => {
    const vm = creatVueVm({
      template: `<atu-transition type="fade"><div v-show="true">Content</div></atu-transition>`,
      components: {
        AtuTransition
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
    expect(vm.$el.textContent).toBe('Content')
  })

  it('should render transition with zoom type', () => {
    const vm = creatVueVm({
      template: `<atu-transition type="zoom" motion="big"><div v-show="true">Zoom</div></atu-transition>`,
      components: {
        AtuTransition
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should render transition with slide type', () => {
    const vm = creatVueVm({
      template: `<atu-transition type="slide" motion="up"><div v-show="true">Slide</div></atu-transition>`,
      components: {
        AtuTransition
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should match snapshot for fade transition', () => {
    const vm = creatVueVm({
      template: `<atu-transition type="fade"><div>Fade Content</div></atu-transition>`,
      components: {
        AtuTransition
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for zoom transition', () => {
    const vm = creatVueVm({
      template: `<atu-transition type="zoom" motion="big"><div>Zoom Content</div></atu-transition>`,
      components: {
        AtuTransition
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
