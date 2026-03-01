import Checkbox from '../checkbox'
import CheckboxGroup from '../checkbox-group'
import { creatVueVm, renderVmString, nextTick } from 'util.js'

describe('Checkbox', () => {
  it('should render checkbox', () => {
    const vm = creatVueVm({
      template: `<a-checkbox>Check me</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-checkbox-wrapper')).toBeTruthy()
  })

  it('should render checked checkbox', () => {
    const vm = creatVueVm({
      template: `<a-checkbox :value="true">Checked</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-checkbox-checked')).toBeTruthy()
  })

  it('should render disabled checkbox', () => {
    const vm = creatVueVm({
      template: `<a-checkbox :disabled="true">Disabled</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-checkbox-disabled')).toBeTruthy()
  })

  it('should render indeterminate checkbox', () => {
    const vm = creatVueVm({
      template: `<a-checkbox :indeterminate="true">Partial</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    }).$mount()
    expect(vm.$el.querySelector('.ant-checkbox-indeterminate')).toBeTruthy()
  })

  it('should toggle checked on click', done => {
    const vm = creatVueVm({
      template: `<a-checkbox :value="checked" @change="onChange">Toggle</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      },
      data () {
        return { checked: false }
      },
      methods: {
        onChange (val) {
          this.checked = val
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-checkbox').click()
    nextTick(() => {
      expect(vm.checked).toBe(true)
      done()
    })
  })

  it('should not toggle when disabled', done => {
    const vm = creatVueVm({
      template: `<a-checkbox :value="checked" :disabled="true" @change="onChange">Disabled</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      },
      data () {
        return { checked: false }
      },
      methods: {
        onChange (val) {
          this.checked = val
        }
      }
    }).$mount()
    vm.$el.querySelector('.ant-checkbox').click()
    nextTick(() => {
      expect(vm.checked).toBe(false)
      done()
    })
  })

  it('should match snapshot for unchecked', () => {
    const vm = creatVueVm({
      template: `<a-checkbox>Label</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for checked', () => {
    const vm = creatVueVm({
      template: `<a-checkbox :value="true">Checked</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for disabled', () => {
    const vm = creatVueVm({
      template: `<a-checkbox :disabled="true">Disabled</a-checkbox>`,
      components: {
        ACheckbox: Checkbox
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('CheckboxGroup', () => {
  it('should render checkbox group with options', () => {
    const vm = creatVueVm({
      template: `<a-checkbox-group :options="options" :value="[]" />`,
      components: {
        ACheckboxGroup: CheckboxGroup
      },
      data () {
        return {
          options: ['Apple', 'Pear', 'Orange']
        }
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-checkbox-group')).toBeTruthy()
    expect(vm.$el.querySelectorAll('.ant-checkbox-wrapper').length).toBe(3)
  })

  it('should render group with object options', () => {
    const vm = creatVueVm({
      template: `<a-checkbox-group :options="options" :value="['A']" />`,
      components: {
        ACheckboxGroup: CheckboxGroup
      },
      data () {
        return {
          options: [
            { label: 'Apple', value: 'A' },
            { label: 'Banana', value: 'B' }
          ]
        }
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.ant-checkbox-wrapper').length).toBe(2)
  })

  it('should render disabled group', () => {
    const vm = creatVueVm({
      template: `<a-checkbox-group :options="['A','B']" :value="[]" :disabled="true" />`,
      components: {
        ACheckboxGroup: CheckboxGroup
      }
    }).$mount()
    const checkboxes = vm.$el.querySelectorAll('.ant-checkbox-disabled')
    expect(checkboxes.length).toBe(2)
  })

  it('should match snapshot for group', () => {
    const vm = creatVueVm({
      template: `<a-checkbox-group :options="options" :value="['Apple']" />`,
      components: {
        ACheckboxGroup: CheckboxGroup
      },
      data () {
        return {
          options: ['Apple', 'Pear', 'Orange']
        }
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
