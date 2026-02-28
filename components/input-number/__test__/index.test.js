import InputNumber from '../index'
import { creatComponentVm, creatVueVm, nextTick } from 'util.js'

describe('InputNumber', () => {
  it('should render correctly', () => {
    const vm = creatComponentVm(InputNumber, {})
    expect(vm.$el.classList.contains('ant-input-number')).toBeTruthy()
  })

  it('should respect min and max', (done) => {
    const vm = creatVueVm({
      template: `<input-number :value="val" :min="0" :max="10" @change="onChange"></input-number>`,
      components: { InputNumber },
      data () {
        return { val: 10 }
      },
      methods: {
        onChange (v) {
          this.val = v
        }
      }
    }).$mount()
    const upHandler = vm.$el.querySelector('.ant-input-number-handler-up')
    expect(upHandler.classList.contains('ant-input-number-handler-up-disabled')).toBeTruthy()
    done()
  })

  it('should step correctly', (done) => {
    const vm = creatVueVm({
      template: `<input-number :value="val" :step="5" @change="onChange"></input-number>`,
      components: { InputNumber },
      data () {
        return { val: 0 }
      },
      methods: {
        onChange (v) {
          this.val = v
        }
      }
    }).$mount()
    const upHandler = vm.$el.querySelector('.ant-input-number-handler-up')
    upHandler.click()
    nextTick(() => {
      expect(vm.val).toBe(5)
      done()
    })
  })

  it('should be disabled', () => {
    const vm = creatComponentVm(InputNumber, { disabled: true })
    expect(vm.$el.classList.contains('ant-input-number-disabled')).toBeTruthy()
    const input = vm.$el.querySelector('.ant-input-number-input')
    expect(input.disabled).toBeTruthy()
  })

  it('should have correct size class', () => {
    const smVm = creatComponentVm(InputNumber, { size: 'small' })
    expect(smVm.$el.classList.contains('ant-input-number-sm')).toBeTruthy()

    const lgVm = creatComponentVm(InputNumber, { size: 'large' })
    expect(lgVm.$el.classList.contains('ant-input-number-lg')).toBeTruthy()
  })
})
