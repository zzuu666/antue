class Soda {
  constructor (vm, options = {}) {
    this.mutations = options.mutations
    this.state = options.state
    this._inject = false
    this.root = vm

    // const { commit } = this

    // const store = this

    // this.commit = function boundCommit (type, payload, options) {
    //   return commit.call(store, type, payload, options)
    // }

    const init = root => {
      const map = (_vm) => {
        if (!_vm.$children.length) return
        _vm.$children.forEach(child => {
          inject(child)
          map(child)
        })
      }
      const inject = (_vm) => {
        if (typeof _vm.soda === 'undefined') return
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
    this.mutations[type].call(this, this.state, payload)
  }
}

export default Soda
