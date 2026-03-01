import { Row, Col } from '../index'
import { creatVueVm, renderVmString } from 'util.js'

describe('Row', () => {
  it('should render basic row', () => {
    const vm = creatVueVm({
      template: `<a-row><a-col :span="12">col-12</a-col><a-col :span="12">col-12</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-row')).toBeTruthy()
  })

  it('should render flex row', () => {
    const vm = creatVueVm({
      template: `<a-row type="flex"><a-col :span="6">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-row-flex')).toBeTruthy()
  })

  it('should render flex row with justify', () => {
    const vm = creatVueVm({
      template: `<a-row type="flex" justify="center"><a-col :span="6">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-row-flex-center')).toBeTruthy()
  })

  it('should render flex row with align', () => {
    const vm = creatVueVm({
      template: `<a-row type="flex" align="middle"><a-col :span="6">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-row-flex-middle')).toBeTruthy()
  })

  it('should apply gutter style', () => {
    const vm = creatVueVm({
      template: `<a-row :gutter="16"><a-col :span="12">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.style.marginLeft).toBe('-8px')
    expect(vm.$el.style.marginRight).toBe('-8px')
  })

  it('should match snapshot for basic row', () => {
    const vm = creatVueVm({
      template: `<a-row><a-col :span="12">Left</a-col><a-col :span="12">Right</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for flex row', () => {
    const vm = creatVueVm({
      template: `<a-row type="flex" justify="space-between" align="middle"><a-col :span="6">A</a-col><a-col :span="6">B</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('Col', () => {
  it('should render col with span', () => {
    const vm = creatVueVm({
      template: `<a-row><a-col :span="8">col-8</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-col-8')).toBeTruthy()
  })

  it('should render col with offset', () => {
    const vm = creatVueVm({
      template: `<a-row><a-col :span="8" :offset="8">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-col-offset-8')).toBeTruthy()
  })

  it('should render col with push and pull', () => {
    const vm = creatVueVm({
      template: `<a-row><a-col :span="8" :push="4">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-col-push-4')).toBeTruthy()
  })

  it('should apply gutter padding from parent row', () => {
    const vm = creatVueVm({
      template: `<a-row :gutter="16"><a-col :span="12">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    const col = vm.$el.querySelector('[class*="ant-col"]')
    expect(col.style.paddingLeft).toBe('8px')
    expect(col.style.paddingRight).toBe('8px')
  })

  it('should render responsive col', () => {
    const vm = creatVueVm({
      template: `<a-row><a-col :xs="24" :sm="12" :md="8">col</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    }).$mount()
    const col = vm.$el.querySelector('[class*="ant-col"]')
    expect(col.classList.contains('ant-col-xs-24')).toBeTruthy()
    expect(col.classList.contains('ant-col-sm-12')).toBeTruthy()
    expect(col.classList.contains('ant-col-md-8')).toBeTruthy()
  })

  it('should match snapshot for responsive col', () => {
    const vm = creatVueVm({
      template: `<a-row :gutter="16"><a-col :xs="24" :sm="12" :md="8" :lg="6">Responsive</a-col></a-row>`,
      components: {
        ARow: Row,
        ACol: Col
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
