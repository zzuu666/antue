const store = {
  state () {
    return {
      active: ''
    }
  },
  mutations: {
    handleTabClick (state, info) {
      this.root.$emit('tab-click', info)
    },
    handleTabChange (state, value) {
      this.root.$emit('change', value)
    },
    handleTabClose (state, index) {
      this.root.$emit('edit', 'remove', index)
    },
    handlePrevClick (state, event) {
      this.root.$emit('prev-click', event)
    },
    handleNextClick (state, event) {
      this.root.$emit('next-click', event)
    }
  }
}

export default store
