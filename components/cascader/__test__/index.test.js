import ACascader from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('Cascader', () => {
  it('should render cascader', () => {
    const vm = creatVueVm({
      template: `<a-cascader :options="options" placeholder="请选择"></a-cascader>`,
      components: { ACascader },
      data () {
        return {
          options: [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                { value: 'hangzhou', label: '杭州' }
              ]
            },
            {
              value: 'jiangsu',
              label: '江苏',
              children: [
                { value: 'nanjing', label: '南京' }
              ]
            }
          ]
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-cascader')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-cascader-input')).toBeTruthy()
  })

  it('should open dropdown on click', done => {
    const vm = creatVueVm({
      template: `<a-cascader :options="options"></a-cascader>`,
      components: { ACascader },
      data () {
        return {
          options: [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                { value: 'hangzhou', label: '杭州' }
              ]
            }
          ]
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-cascader-picker').click()
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-cascader-picker-open')).toBeTruthy()
      expect(vm.$el.querySelector('.ant-cascader-menus')).toBeTruthy()
      done()
    })
  })

  it('should display selected path', done => {
    const vm = creatVueVm({
      template: `<a-cascader :options="options" :value="selected"></a-cascader>`,
      components: { ACascader },
      data () {
        return {
          selected: ['zhejiang', 'hangzhou'],
          options: [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                { value: 'hangzhou', label: '杭州' }
              ]
            }
          ]
        }
      }
    }).$mount()
    nextTick(() => {
      const input = vm.$el.querySelector('.ant-cascader-input')
      expect(input.value).toBe('浙江 / 杭州')
      done()
    })
  })
})
