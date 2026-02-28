import ADatePicker from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('DatePicker', () => {
  it('should render date picker', () => {
    const vm = creatVueVm({
      template: `<a-date-picker placeholder="请选择日期"></a-date-picker>`,
      components: { ADatePicker }
    }).$mount()
    expect(vm.$el.classList.contains('ant-calendar-picker')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-input')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-input').placeholder).toBe('请选择日期')
  })

  it('should open calendar on click', done => {
    const vm = creatVueVm({
      template: `<a-date-picker></a-date-picker>`,
      components: { ADatePicker }
    }).$mount()
    vm.$el.querySelector('.ant-calendar-picker-input').click()
    nextTick(() => {
      expect(vm.$el.classList.contains('ant-calendar-picker-open')).toBeTruthy()
      expect(vm.$el.querySelector('.ant-calendar-panel')).toBeTruthy()
      expect(vm.$el.querySelector('.ant-calendar-table')).toBeTruthy()
      done()
    })
  })

  it('should display selected date', done => {
    let dateString = null
    const vm = creatVueVm({
      template: `<a-date-picker @change="handleChange"></a-date-picker>`,
      components: { ADatePicker },
      methods: {
        handleChange (date, str) {
          dateString = str
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-calendar-picker-input').click()
    nextTick(() => {
      const cells = vm.$el.querySelectorAll('.ant-calendar-cell-in-month')
      expect(cells.length).toBeGreaterThan(0)
      cells[0].click()
      nextTick(() => {
        expect(dateString).toBeTruthy()
        expect(vm.$el.querySelector('.ant-input').value).toBeTruthy()
        done()
      })
    })
  })
})
