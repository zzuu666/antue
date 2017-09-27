import AButton from '../index'
import { creatComponentVm, creatVueVm, simulateEvent, nextTick } from 'util.js'

describe('Button', () => {
  it('has a created hook', () => {
    expect(typeof AButton.created).toBe('function')
  })
  it('has correct type class', () => {
    const vm = creatComponentVm(AButton, {
      type: 'primary'
    })
    expect(vm.$el.classList.contains('ant-btn-primary')).toBeTruthy()
  })
  it('has correct loading class', () => {
    const vm = creatComponentVm(AButton, {
      loading: true
    })
    expect(vm.$el.classList.contains('ant-btn-loading')).toBeTruthy()
  })
  it('should change loading state instantly by default', done => {
    const vm = creatVueVm({
      template: `<a-button :loading="loading" @click="changeLoading">Click Me</a-button>`,
      components: {
        AButton
      },
      data () {
        return {
          loading: false
        }
      },
      methods: {
        changeLoading () {
          this.loading = true
        }
      }
    }).$mount()
    vm.$el.dispatchEvent(simulateEvent('click'))
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-btn-loading')).toBeTruthy()
      done()
    })
  })
})
