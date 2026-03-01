import AAffix from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Affix', () => {
  it('should render affix', () => {
    const vm = creatVueVm({
      template: `<a-affix><button>Affix Button</button></a-affix>`,
      components: {
        AAffix
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
    expect(vm.$el.textContent.trim()).toBe('Affix Button')
  })

  it('should render with offsetTop', () => {
    const vm = creatVueVm({
      template: `<a-affix :offsetTop="10"><button>Top</button></a-affix>`,
      components: {
        AAffix
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should render with offsetBottom', () => {
    const vm = creatVueVm({
      template: `<a-affix :offsetBottom="10"><button>Bottom</button></a-affix>`,
      components: {
        AAffix
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should not be affixed initially', () => {
    const vm = creatVueVm({
      template: `<a-affix><button>Not Fixed</button></a-affix>`,
      components: {
        AAffix
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-affix')).toBeFalsy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<a-affix :offsetTop="10"><button>Affixed</button></a-affix>`,
      components: {
        AAffix
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
