import AButton from '../index'
import { creatComponentVm, creatVueVm, simulateEvent, nextTick, renderVmString } from 'util.js'

describe('Button', () => {
  it('has correct size class', () => {
    const vm = creatComponentVm(AButton, {
      size: 'large'
    })
    expect(vm.$el.classList.contains('ant-btn-lg')).toBeTruthy()
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
  it('has correct icon filling', () => {
    const vm = creatVueVm({
      template: `<a-button icon="search"></a-button>`,
      components: {
        AButton
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
  it('should not show text when specify shape', () => {
    const vm = creatVueVm({
      template: `<a-button icon="search" shape="circle">Test</a-button>`,
      components: {
        AButton
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
  it('should show has span tag when content just text', () => {
    const vm = creatVueVm({
      template: `<a-button icon="search">Test</a-button>`,
      components: {
        AButton
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
  it('should show loading icon when specify loading', () => {
    const vm = creatVueVm({
      template: `<a-button icon="search" loading></a-button>`,
      components: {
        AButton
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
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
    simulateEvent(vm.$el, 'click')
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-btn-loading')).toBeTruthy()
      done()
    })
  })
  it('should change loading state with delay', done => {
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
          this.loading = {
            delay: 1000
          }
        }
      }
    }).$mount()
    simulateEvent(vm.$el, 'click')
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-btn-loading')).toBeFalsy()
      done()
    })
  })
})
