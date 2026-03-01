import APopconfirm from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Popconfirm', () => {
  it('should render popconfirm trigger element', () => {
    const vm = creatVueVm({
      template: `<a-popconfirm title="Are you sure?"><button>Delete</button></a-popconfirm>`,
      components: {
        APopconfirm
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
    expect(vm.$el.textContent).toBe('Delete')
  })

  it('should use click trigger by default', () => {
    const vm = creatVueVm({
      template: `<a-popconfirm title="Sure?"><button>Click</button></a-popconfirm>`,
      components: {
        APopconfirm
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should accept custom okText and cancelText', () => {
    const vm = creatVueVm({
      template: `<a-popconfirm title="Sure?" okText="Confirm" cancelText="Cancel"><button>Action</button></a-popconfirm>`,
      components: {
        APopconfirm
      }
    }).$mount()
    expect(vm.$el).toBeTruthy()
  })

  it('should match snapshot', () => {
    const vm = creatVueVm({
      template: `<a-popconfirm title="Are you sure?"><button>Delete</button></a-popconfirm>`,
      components: {
        APopconfirm
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
