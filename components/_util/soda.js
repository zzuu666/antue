class Soda {
  constructor (vm, options = {}) {
    this.mutations = options.mutations
    this.state = options.state
    this._inject = false

    const init = root => {
      const map = (_vm) => {
        if (!vm.$children.length) return
        _vm.$children.forEach(child => {
          inject(child)
          map(child)
        })
      }
      const inject = (_vm) => {
        _vm.$soda = this
        _vm.soda = this.state
      }
      root.soda = this.state
      map(root)
    }
    init(vm)
    return this
  }

  commit (type, payload) {
    this.mutations[type](this.state, payload)
  }
}

export default Soda
