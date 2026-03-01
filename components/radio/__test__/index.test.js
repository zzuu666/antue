import Radio from '../radio'
import RadioGroup from '../group'
import { creatVueVm, renderVmString, nextTick } from 'util.js'

describe('Radio', () => {
  it('should render radio', () => {
    const vm = creatVueVm({
      template: `<a-radio value="A">Radio A</a-radio>`,
      components: {
        ARadio: Radio
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-radio-wrapper')).toBeTruthy()
  })

  it('should render checked radio', () => {
    const vm = creatVueVm({
      template: `<a-radio value="A" :checked="true">Radio A</a-radio>`,
      components: {
        ARadio: Radio
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-radio-wrapper-checked')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-radio-checked')).toBeTruthy()
  })

  it('should render disabled radio', () => {
    const vm = creatVueVm({
      template: `<a-radio value="A" :disabled="true">Radio A</a-radio>`,
      components: {
        ARadio: Radio
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-radio-wrapper-disabled')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-radio-disabled')).toBeTruthy()
  })

  it('should emit change on click', done => {
    let changedValue = null
    const vm = creatVueVm({
      template: `<a-radio value="A" @change="onChange">Radio A</a-radio>`,
      components: {
        ARadio: Radio
      },
      methods: {
        onChange (val) {
          changedValue = val
        }
      }
    }).$mount()
    vm.$el.click()
    nextTick(() => {
      expect(changedValue).toBe('A')
      done()
    })
  })

  it('should match snapshot for basic radio', () => {
    const vm = creatVueVm({
      template: `<a-radio value="A">Radio A</a-radio>`,
      components: {
        ARadio: Radio
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it('should match snapshot for checked radio', () => {
    const vm = creatVueVm({
      template: `<a-radio value="A" :checked="true">Checked</a-radio>`,
      components: {
        ARadio: Radio
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})

describe('RadioGroup', () => {
  it('should render radio group', () => {
    const vm = creatVueVm({
      template: `<a-radio-group :options="['A','B','C']" value="A" />`,
      components: {
        ARadioGroup: RadioGroup
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-radio-group')).toBeTruthy()
  })

  it('should render radio group with size', () => {
    const vm = creatVueVm({
      template: `<a-radio-group :options="['A','B']" value="A" size="large" />`,
      components: {
        ARadioGroup: RadioGroup
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-radio-group-large')).toBeTruthy()
  })

  it('should render radio group with small size', () => {
    const vm = creatVueVm({
      template: `<a-radio-group :options="['A','B']" value="A" size="small" />`,
      components: {
        ARadioGroup: RadioGroup
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-radio-group-small')).toBeTruthy()
  })

  it('should render group with object options', () => {
    const vm = creatVueVm({
      template: `<a-radio-group :options="options" value="a" />`,
      components: {
        ARadioGroup: RadioGroup
      },
      data () {
        return {
          options: [
            { label: 'Alpha', value: 'a' },
            { label: 'Beta', value: 'b' }
          ]
        }
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.ant-radio-wrapper').length).toBe(2)
  })

  it('should render disabled group', done => {
    const vm = creatVueVm({
      template: `<a-radio-group :options="['A','B']" value="A" :disabled="true" />`,
      components: {
        ARadioGroup: RadioGroup
      }
    }).$mount()
    nextTick(() => {
      const radios = vm.$el.querySelectorAll('.ant-radio-wrapper-disabled')
      expect(radios.length).toBe(2)
      done()
    })
  })

  it('should match snapshot for radio group', () => {
    const vm = creatVueVm({
      template: `<a-radio-group :options="['A','B','C']" value="B" />`,
      components: {
        ARadioGroup: RadioGroup
      }
    })
    renderVmString(vm, (str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
