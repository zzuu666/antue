import Timeline from '../index'
import TimelineItem from '../timeline-item'
import { creatVueVm, renderVmString } from 'util.js'

describe('Timeline', () => {
  it('should render timeline', () => {
    const vm = creatVueVm({
      template: `<timeline>
        <timeline-item>Step 1</timeline-item>
        <timeline-item>Step 2</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-timeline')).toBeTruthy()
    expect(vm.$el.querySelectorAll('.ant-timeline-item').length).toBe(2)
  })

  it('should render multiple timeline items', () => {
    const vm = creatVueVm({
      template: `<timeline>
        <timeline-item>Step 1</timeline-item>
        <timeline-item>Step 2</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-timeline-item')
    expect(items.length).toBe(2)
  })

  it('should render item with color', () => {
    const vm = creatVueVm({
      template: `<timeline>
        <timeline-item color="green">Success</timeline-item>
        <timeline-item color="red">Error</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-timeline-item-head-green')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-timeline-item-head-red')).toBeTruthy()
  })

  it('should render pending timeline', () => {
    const vm = creatVueVm({
      template: `<timeline :pending="true">
        <timeline-item>Step 1</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-timeline-pending')).toBeTruthy()
  })

  it('should render content in item', () => {
    const vm = creatVueVm({
      template: `<timeline>
        <timeline-item>Content here</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-timeline-item-content').textContent.trim()).toBe('Content here')
  })

  it('should match snapshot for basic timeline', () => {
    const vm = creatVueVm({
      template: `<timeline>
        <timeline-item>Step 1</timeline-item>
        <timeline-item>Step 2</timeline-item>
        <timeline-item>Step 3</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for colored timeline', () => {
    const vm = creatVueVm({
      template: `<timeline>
        <timeline-item color="green">Success</timeline-item>
        <timeline-item color="red">Error</timeline-item>
        <timeline-item>Default</timeline-item>
      </timeline>`,
      components: {
        Timeline,
        TimelineItem
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
