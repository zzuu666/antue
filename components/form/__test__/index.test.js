import AntForm from '../index'
import { creatVueVm, nextTick } from 'util.js'

const AntFormItem = AntForm.Item

describe('Form', () => {
  it('should render form with horizontal layout class by default', () => {
    const vm = creatVueVm({
      template: `
        <ant-form>
          <ant-form-item label="Name">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-form')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-form-horizontal')).toBeTruthy()
  })

  it('should render form items with labels', () => {
    const vm = creatVueVm({
      template: `
        <ant-form>
          <ant-form-item label="Username">
            <input type="text" />
          </ant-form-item>
          <ant-form-item label="Password">
            <input type="password" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      }
    }).$mount()
    var labels = vm.$el.querySelectorAll('.ant-form-item-label')
    expect(labels.length).toBe(2)
    expect(labels[0].textContent.trim()).toBe('Username')
    expect(labels[1].textContent.trim()).toBe('Password')
  })

  it('should render vertical layout', () => {
    const vm = creatVueVm({
      template: `
        <ant-form layout="vertical">
          <ant-form-item label="Name">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-form-vertical')).toBeTruthy()
    expect(vm.$el.classList.contains('ant-form-horizontal')).toBeFalsy()
  })

  it('should render inline layout', () => {
    const vm = creatVueVm({
      template: `
        <ant-form layout="inline">
          <ant-form-item label="Name">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      }
    }).$mount()
    expect(vm.$el.classList.contains('ant-form-inline')).toBeTruthy()
  })

  it('should validate required field and show error', (done) => {
    const vm = creatVueVm({
      template: `
        <ant-form ref="form" :model="formData" :rules="rules">
          <ant-form-item label="Name" prop="name">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      },
      data () {
        return {
          formData: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'blur' }
            ]
          }
        }
      }
    }).$mount()
    vm.$refs.form.validate(function (valid, fields) {
      expect(valid).toBe(false)
      nextTick(function () {
        var explain = vm.$el.querySelector('.ant-form-item-explain')
        expect(explain).not.toBeNull()
        expect(explain.textContent).toBe('Please input name')
        done()
      })
    })
  })

  it('should validate with custom rules', (done) => {
    const vm = creatVueVm({
      template: `
        <ant-form ref="form" :model="formData" :rules="rules">
          <ant-form-item label="Email" prop="email">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      },
      data () {
        return {
          formData: {
            email: 'invalid'
          },
          rules: {
            email: [
              { type: 'email', message: 'Invalid email', trigger: 'blur' }
            ]
          }
        }
      }
    }).$mount()
    vm.$refs.form.validate(function (valid) {
      expect(valid).toBe(false)
      nextTick(function () {
        var explain = vm.$el.querySelector('.ant-form-item-explain')
        expect(explain).not.toBeNull()
        expect(explain.textContent).toBe('Invalid email')
        done()
      })
    })
  })

  it('should pass validation when fields are valid', (done) => {
    const vm = creatVueVm({
      template: `
        <ant-form ref="form" :model="formData" :rules="rules">
          <ant-form-item label="Name" prop="name">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      },
      data () {
        return {
          formData: {
            name: 'John'
          },
          rules: {
            name: [
              { required: true, message: 'Please input name' }
            ]
          }
        }
      }
    }).$mount()
    vm.$refs.form.validate(function (valid) {
      expect(valid).toBe(true)
      done()
    })
  })

  it('should reset fields and clear validation', (done) => {
    const vm = creatVueVm({
      template: `
        <ant-form ref="form" :model="formData" :rules="rules">
          <ant-form-item label="Name" prop="name">
            <input type="text" />
          </ant-form-item>
        </ant-form>
      `,
      components: {
        AntForm,
        AntFormItem
      },
      data () {
        return {
          formData: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name' }
            ]
          }
        }
      }
    }).$mount()
    vm.$refs.form.validate(function () {
      nextTick(function () {
        var explain = vm.$el.querySelector('.ant-form-item-explain')
        expect(explain).not.toBeNull()
        vm.$refs.form.resetFields()
        nextTick(function () {
          var afterExplain = vm.$el.querySelector('.ant-form-item-explain')
          expect(afterExplain).toBeNull()
          done()
        })
      })
    })
  })
})
