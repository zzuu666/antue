import ATag from '../index'
import CheckableTag from '../checkable-tag'
import { creatVueVm, renderVmString, nextTick } from 'util.js'

describe('Tag', () => {
  it('should render basic tag', () => {
    const vm = creatVueVm({
      template: `<a-tag>Tag 1</a-tag>`,
      components: {
        ATag
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tag')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-tag-text').textContent).toBe('Tag 1')
  })

  it('should render tag with preset color', () => {
    const vm = creatVueVm({
      template: `<a-tag color="blue">Blue</a-tag>`,
      components: {
        ATag
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tag-blue')).toBeTruthy()
  })

  it('should render tag with custom color', () => {
    const vm = creatVueVm({
      template: `<a-tag color="#f50">Custom</a-tag>`,
      components: {
        ATag
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tag-has-color')).toBeTruthy()
    expect(vm.$el.style.backgroundColor).toBe('rgb(255, 85, 0)')
  })

  it('should render closable tag with close icon', () => {
    const vm = creatVueVm({
      template: `<a-tag closable>Closable</a-tag>`,
      components: {
        ATag
      }
    }).$mount()
    expect(vm.$el.querySelector('.anticon-cross')).toBeTruthy()
  })

  it('should emit close event when close icon clicked', done => {
    let closed = false
    const vm = creatVueVm({
      template: `<a-tag closable @close="onClose">Closable</a-tag>`,
      components: {
        ATag
      },
      methods: {
        onClose () {
          closed = true
        }
      }
    }).$mount()
    vm.$el.querySelector('.anticon-cross').click()
    nextTick(() => {
      expect(closed).toBe(true)
      done()
    })
  })

  it('should match snapshot for basic tag', () => {
    const vm = creatVueVm({
      template: `<a-tag>Tag 1</a-tag>`,
      components: {
        ATag
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for closable tag', () => {
    const vm = creatVueVm({
      template: `<a-tag closable>Closable</a-tag>`,
      components: {
        ATag
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for colored tag', () => {
    const vm = creatVueVm({
      template: `<a-tag color="green">Green</a-tag>`,
      components: {
        ATag
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('CheckableTag', () => {
  it('should render checkable tag', () => {
    const vm = creatVueVm({
      template: `<checkable-tag :checked="false">Check</checkable-tag>`,
      components: {
        CheckableTag
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tag')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-tag-checkable')).toBeTruthy()
  })

  it('should have checked class when checked', () => {
    const vm = creatVueVm({
      template: `<checkable-tag :checked="true">Check</checkable-tag>`,
      components: {
        CheckableTag
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-tag-checkable-checked')).toBeTruthy()
  })

  it('should emit change event on click', done => {
    let newChecked = null
    const vm = creatVueVm({
      template: `<checkable-tag :checked="false" @change="onChange">Check</checkable-tag>`,
      components: {
        CheckableTag
      },
      methods: {
        onChange (val) {
          newChecked = val
        }
      }
    }).$mount()
    vm.$el.click()
    nextTick(() => {
      expect(newChecked).toBe(true)
      done()
    })
  })

  it('should match snapshot for checked tag', () => {
    const vm = creatVueVm({
      template: `<checkable-tag :checked="true">Checked</checkable-tag>`,
      components: {
        CheckableTag
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
