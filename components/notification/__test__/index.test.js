import notification from '..'

describe('Notification', () => {
  afterEach(() => {
    notification.destroy()
    notification.config({
      prefixCls: 'ant-notification',
      duration: 4.5,
      placement: 'bottomRight'
    })
  })

  it('should be able to open notification', () => {
    notification.open({
      message: 'Test Title',
      description: 'Test description'
    })
    expect(document.querySelectorAll('.ant-notification-notice').length).toBe(1)
  })

  it('should render message and description', () => {
    notification.open({
      message: 'Hello',
      description: 'World'
    })
    expect(document.querySelector('.ant-notification-notice-message').textContent).toBe('Hello')
    expect(document.querySelector('.ant-notification-notice-description').textContent).toBe('World')
  })

  it('should be able to show all notification types', () => {
    notification.info({ message: 'Info', description: 'info desc' })
    notification.success({ message: 'Success', description: 'success desc' })
    notification.error({ message: 'Error', description: 'error desc' })
    notification.warning({ message: 'Warning', description: 'warning desc' })
    expect(document.querySelectorAll('.ant-notification-notice').length).toBe(4)
  })

  it('should show info icon for info type', () => {
    notification.info({ message: 'Info', description: 'info desc' })
    expect(document.querySelector('.ant-notification-notice-icon-info')).toBeTruthy()
  })

  it('should show success icon for success type', () => {
    notification.success({ message: 'Success', description: 'success desc' })
    expect(document.querySelector('.ant-notification-notice-icon-success')).toBeTruthy()
  })

  it('should show error icon for error type', () => {
    notification.error({ message: 'Error', description: 'error desc' })
    expect(document.querySelector('.ant-notification-notice-icon-error')).toBeTruthy()
  })

  it('should show warning icon for warning type', () => {
    notification.warning({ message: 'Warning', description: 'warning desc' })
    expect(document.querySelector('.ant-notification-notice-icon-warning')).toBeTruthy()
  })

  it('should be able to hide manually', () => {
    const hide = notification.open({
      message: 'Manual',
      description: 'Close me',
      duration: 0
    })
    expect(document.querySelectorAll('.ant-notification-notice').length).toBe(1)
    hide()
    setTimeout(() => {
      expect(document.querySelector('.ant-notification-notice').style.display).toBe('none')
    }, 100)
  })

  it('should be able to config prefixCls', () => {
    notification.config({
      prefixCls: 'custom-notification'
    })
    notification.open({ message: 'Test', description: 'desc' })
    expect(document.querySelectorAll('.custom-notification').length).toBe(1)
  })

  it('should be able to destroy globally', () => {
    notification.open({ message: 'A', description: 'a', duration: 0 })
    notification.open({ message: 'B', description: 'b', duration: 0 })
    expect(document.querySelectorAll('.ant-notification-notice').length).toBe(2)
    notification.destroy()
    expect(document.querySelectorAll('.ant-notification').length).toBe(0)
  })
})
