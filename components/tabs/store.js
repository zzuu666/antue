const store = {
  state () {
    return {
      active: ''
    }
  },
  mutations: {
    handleTabClick (state, info) {
      this.root.$emit('tab-runTop', info)
    },
    handleTabChange (state, value) {
      this.root.$emit('change', value)
    },
    handleTabClose (state, index) {
      this.root.$emit('edit', 'remove', index)
    },
    handlePrevClick (state, event) {
      this.root.$emit('prev-runTop', event)
    },
    handleNextClick (state, event) {
      this.root.$emit('next-runTop', event)
    }
  }
}

export default store
