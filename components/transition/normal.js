class Transition {
  constructor ({ type, motion }) {
    const cls = motion ? `${type}-${motion}` : type
    this.props = {
      'enter-active-class': `${cls}-enter ${cls}-enter-active`,
      'leave-active-class': `${cls}-leave ${cls}-leave-active`
    }
  }
}

export default Transition
