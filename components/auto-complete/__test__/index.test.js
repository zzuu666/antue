import AAutoComplete from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('AutoComplete', () => {
  it('should render auto-complete', () => {
    const vm = creatVueVm({
      template: `<a-auto-complete :dataSource="dataSource"></a-auto-complete>`,
      components: { AAutoComplete },
      data () {
        return {
          dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street']
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-select')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-select-auto-complete')).toBeTruthy()
  })

  it('should show dropdown on input', done => {
    const vm = creatVueVm({
      template: `<a-auto-complete :dataSource="dataSource"></a-auto-complete>`,
      components: { AAutoComplete },
      data () {
        return {
          dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street']
        }
      }
    }).$mount()
    const input = vm.$el.querySelector('.ant-select-search__field')
    input.value = 'B'
    input.dispatchEvent(new Event('input'))
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-select-open')).toBeTruthy()
      done()
    })
  })

  it('should filter options based on input', done => {
    const vm = creatVueVm({
      template: `<a-auto-complete :dataSource="dataSource"></a-auto-complete>`,
      components: { AAutoComplete },
      data () {
        return {
          dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street']
        }
      }
    }).$mount()
    const input = vm.$el.querySelector('.ant-select-search__field')
    input.value = 'Wall'
    input.dispatchEvent(new Event('input'))
    nextTick(() => {
      const items = vm.$el.querySelectorAll('.ant-select-dropdown-menu-item')
      expect(items.length).toBe(1)
      expect(items[0].textContent.trim()).toBe('Wall Street')
      done()
    })
  })
})
