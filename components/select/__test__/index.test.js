import ASelect from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('Select', () => {
  it('should render select with options', () => {
    const vm = creatVueVm({
      template: `<a-select :options="options" placeholder="请选择"></a-select>`,
      components: { ASelect },
      data () {
        return {
          options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
          ]
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-select')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-select-selection--single')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-select-selection__placeholder').textContent.trim()).toBe('请选择')
  })

  it('should open dropdown on click', done => {
    const vm = creatVueVm({
      template: `<a-select :options="options"></a-select>`,
      components: { ASelect },
      data () {
        return {
          options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
          ]
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-select-selection').click()
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-select-open')).toBeTruthy()
      done()
    })
  })

  it('should select an option', done => {
    let selectedValue = null
    const vm = creatVueVm({
      template: `<a-select :options="options" @change="handleChange"></a-select>`,
      components: { ASelect },
      data () {
        return {
          options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
          ]
        }
      },
      methods: {
        handleChange (val) {
          selectedValue = val
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-select-selection').click()
    nextTick(() => {
      const items = vm.$el.querySelectorAll('.ant-select-dropdown-menu-item')
      expect(items.length).toBe(2)
      items[0].click()
      nextTick(() => {
        expect(selectedValue).toBe('apple')
        done()
      })
    })
  })

  it('should render disabled state', () => {
    const vm = creatVueVm({
      template: `<a-select :options="[]" disabled></a-select>`,
      components: { ASelect }
    }).$mount()
    expect(vm.$el.classList.contains('ant-select-disabled')).toBeTruthy()
  })

  it('should render large size', () => {
    const vm = creatVueVm({
      template: `<a-select :options="[]" size="large"></a-select>`,
      components: { ASelect }
    }).$mount()
    expect(vm.$el.classList.contains('ant-select-lg')).toBeTruthy()
  })

  it('should render small size', () => {
    const vm = creatVueVm({
      template: `<a-select :options="[]" size="small"></a-select>`,
      components: { ASelect }
    }).$mount()
    expect(vm.$el.classList.contains('ant-select-sm')).toBeTruthy()
  })

  it('should render multiple select', () => {
    const vm = creatVueVm({
      template: `<a-select :options="options" multiple :value="['apple']"></a-select>`,
      components: { ASelect },
      data () {
        return {
          options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
          ]
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-select-selection--multiple')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-select-selection__choice')).toBeTruthy()
  })

  it('should show not found content when no options match', done => {
    const vm = creatVueVm({
      template: `<a-select :options="options" showSearch notFoundContent="暂无数据"></a-select>`,
      components: { ASelect },
      data () {
        return {
          options: [{ label: 'Apple', value: 'apple' }]
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-select-selection').click()
    nextTick(() => {
      expect(vm.$el.querySelector('.ant-select-dropdown')).toBeTruthy()
      done()
    })
  })
})
