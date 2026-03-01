import Steps from '../index'
import Step from '../step'
import { creatVueVm, renderVmString } from 'util.js'

describe('Steps', () => {
  it('should render steps', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="1">
        <a-step title="Step 1" />
        <a-step title="Step 2" />
        <a-step title="Step 3" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-steps')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-steps-horizontal')).toBeTruthy()
  })

  it('should render vertical steps', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="0" direction="vertical">
        <a-step title="Step 1" />
        <a-step title="Step 2" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-steps-vertical')).toBeTruthy()
  })

  it('should render small size steps', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="0" size="small">
        <a-step title="Step 1" />
        <a-step title="Step 2" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-steps-small')).toBeTruthy()
  })

  it('should render dot style steps', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="0" :progressDot="true">
        <a-step title="Step 1" />
        <a-step title="Step 2" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-steps-dot')).toBeTruthy()
  })

  it('should render step items', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="0">
        <a-step title="First" description="This is first" />
        <a-step title="Second" description="This is second" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-steps-item')
    expect(items.length).toBe(2)
  })

  it('should render step with description', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="0">
        <a-step title="First" description="Description text" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-steps-description')).toBeTruthy()
  })

  it('should match snapshot for horizontal steps', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="1">
        <a-step title="Finished" description="Done" />
        <a-step title="In Progress" description="Working" />
        <a-step title="Waiting" description="Pending" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for vertical steps', () => {
    const vm = creatVueVm({
      template: `<a-steps :current="1" direction="vertical">
        <a-step title="Step 1" description="Desc 1" />
        <a-step title="Step 2" description="Desc 2" />
      </a-steps>`,
      components: {
        ASteps: Steps,
        AStep: Step
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
