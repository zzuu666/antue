import message from '..'
import MessageBox from '../message-box'
import Message from '../message'
import { creatComponentVm, creatVueVm, simulateEvent, nextTick, renderVmString } from 'util.js'
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

describe('message', () => {
  afterEach(() => {
    message.destroy()
  })

  if('message-box should has prefixCls class', () => {
    const vm = creatComponentVm(MessageBox, {
      prefixCls: 'test-message-box'
    })
    expect(vm.$el.classList.contains('test-message-box')).toBeTruthy()
  })

  if('should has prefixCls class', () => {
    const vm = creatComponentVm(Message, {
      prefixCls: 'test-message'
    })
    expect(vm.$el.classList.contains('test-message-notice')).toBeTruthy()
    expect(vm.$el.classList.contains('test-message-notice-content')).toBeTruthy()
  })

  if('should has type class', () => {
    const vm = creatComponentVm(Message, {
      type: 'success'
    })
    expect(vm.$el.classList.contains('ant-message-success')).toBeTruthy()
  })

  it('should be able to config top', () => {
    message.config({
      top: 100,
    })
    message.info('whatever')
    expect(document.querySelectorAll('.ant-message')[0].style.top).toBe('100px')
  })

  it('should be able to config getContainer', () => {
    message.config({
      getContainer: () => {
        const div = document.createElement('div')
        div.className = 'custom-container'
        document.body.appendChild(div)
        return div
      }
    })
    message.info('whatever')
    expect(document.querySelectorAll('.custom-container').length).toBe(1)
  })

  it('should be able to hide manually', async () => {
    const hide1 = message.info('whatever', 0)
    const hide2 = message.info('whatever', 0)
    expect(document.querySelectorAll('.ant-message-notice').length).toBe(2)
    await delay(100)
    hide1()
    setTimeout(() => {
      expect(document.querySelectorAll('.ant-message-notice').length).toBe(1)
    }, 200)
    await delay(100)
    hide2()
    setTimeout(() => {
      expect(document.querySelectorAll('.ant-message-notice').length).toBe(0)
    }, 200)
  })

  it('should be able to destroy globally', () => {
    message.info('whatever', 0)
    message.info('whatever', 0)
    expect(document.querySelectorAll('.ant-message').length).toBe(1)
    expect(document.querySelectorAll('.ant-message-notice').length).toBe(2)
    message.destroy()
    expect(document.querySelectorAll('.ant-message').length).toBe(0)
    expect(document.querySelectorAll('.ant-message-notice').length).toBe(0)
  })
})
