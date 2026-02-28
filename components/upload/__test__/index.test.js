import AUpload from '../index'
import { creatVueVm } from 'util.js'

describe('Upload', () => {
  it('should render upload button', () => {
    const vm = creatVueVm({
      template: `<a-upload action="/upload"></a-upload>`,
      components: { AUpload }
    }).$mount()
    expect(vm.$el.classList.contains('ant-upload')).toBeTruthy()
    expect(vm.$el.querySelector('.ant-upload-trigger')).toBeTruthy()
    expect(vm.$el.querySelector('button')).toBeTruthy()
  })

  it('should show file list', () => {
    const vm = creatVueVm({
      template: `<a-upload action="/upload" :fileList="fileList"></a-upload>`,
      components: { AUpload },
      data () {
        return {
          fileList: [
            { uid: '1', name: 'test.png', status: 'done' },
            { uid: '2', name: 'test2.png', status: 'done' }
          ]
        }
      }
    }).$mount()
    const items = vm.$el.querySelectorAll('.ant-upload-list-item')
    expect(items.length).toBe(2)
    expect(vm.$el.querySelector('.ant-upload-list-item-name').textContent.trim()).toBe('test.png')
  })

  it('should render disabled state', () => {
    const vm = creatVueVm({
      template: `<a-upload action="/upload" disabled></a-upload>`,
      components: { AUpload }
    }).$mount()
    expect(vm.$el.classList.contains('ant-upload-disabled')).toBeTruthy()
    expect(vm.$el.querySelector('button').disabled).toBeTruthy()
  })
})
