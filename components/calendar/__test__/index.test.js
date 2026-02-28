import ACalendar from '../index'
import { creatVueVm, nextTick } from 'util.js'

describe('Calendar', () => {
  it('should render calendar', () => {
    const vm = creatVueVm({
      template: `<a-calendar></a-calendar>`,
      components: { ACalendar }
    }).$mount()
    expect(vm.$el.classList.contains('ant-fullcalendar')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-fullcalendar-table')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-fullcalendar-header')).toBeTruthy()
  })

  it('should display current month', () => {
    const vm = creatVueVm({
      template: `<a-calendar></a-calendar>`,
      components: { ACalendar }
    }).$mount()
    const today = new Date()
    const yearText = vm.$el.querySelector('.ant-fullcalendar-year-select').textContent.trim()
    expect(yearText).toContain(String(today.getFullYear()))
    const cells = vm.$el.querySelectorAll('.ant-fullcalendar-cell-in-month')
    expect(cells.length).toBeGreaterThan(0)
  })

  it('should switch mode', done => {
    let panelMode = null
    const vm = creatVueVm({
      template: `<a-calendar @panelChange="handlePanelChange"></a-calendar>`,
      components: { ACalendar },
      methods: {
        handlePanelChange (date, mode) {
          panelMode = mode
        }
      }
    }).$mount()
    const modeBtns = vm.$el.querySelectorAll('.ant-fullcalendar-mode-switch-btn')
    expect(modeBtns.length).toBe(2)
    modeBtns[1].click()
    nextTick(() => {
      expect(panelMode).toBe('year')
      expect(vm.$el.querySelector('.ant-fullcalendar-month-panel')).toBeTruthy()
      done()
    })
  })
})
