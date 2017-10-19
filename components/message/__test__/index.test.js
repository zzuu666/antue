import message from '..'
import MessageBox from '../message-box'
import Message from '../message'
import { creatComponentVm } from 'util.js'

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

describe('message', () => {
  afterEach(() => {
    message.destroy()
    message.config({
      prefixCls: 'ant-message',
      duration: 3
    })
  })

  it('message-box should has prefixCls class', () => {
    const vm = creatComponentVm(MessageBox, {
      prefixCls: 'test-message-box'
    })
    expect(vm.$el.classList.contains('test-message-box')).toBeTruthy()
  })

  it('should has prefixCls class', () => {
    const vm = creatComponentVm(Message, {
      prefixCls: 'test-message'
    })
    expect(vm.$el.classList.contains('test-message-notice')).toBeTruthy()
  })

  it('should be able to all message', () => {
    message.info('whatever')
    message.success('whatever')
    message.error('whatever')
    message.warn('whatever')
    message.warning('whatever')
    message.loading('whatever')
    expect(document.querySelectorAll('.ant-message-notice').length).toBe(6)
  })

  it('should be able to args onClose', async () => {
    let closeFlag = 1
    const userOnClose = () => {
      closeFlag = 2
    }
    message.info('whatever', 1, userOnClose)
    await delay(1200)
    expect(closeFlag).toBe(2)
  })

  it('should be able to config top', () => {
    message.config({
      top: 100
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

  it('should be able to config duration', () => {
    message.config({
      duration: 1
    })
    message.info('whatever')
    setTimeout(() => {
      expect(document.querySelectorAll('.ant-message-notice').length).toBe(0)
    }, 1200)
  })

  it('should be able to config prefixCls', () => {
    message.config({
      prefixCls: 'prefix-message'
    })
    message.info('whatever')
    expect(document.querySelectorAll('.prefix-message').length).toBe(1)
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
