const store = {
  state () {
    return {
      active: '',
      tabs: []
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
    },
    generateTabs (state, { panes, active }) {
      const tabs = panes.map(vm => {
        const { closable, disabled, icon, index } = vm
        const tab = vm.$slots.tab ? vm.$slots.tab : vm.tab
        const isActive = active === index
        return {
          closable,
          disabled,
          icon,
          index,
          isActive,
          tab
        }
      })
      state.tabs = tabs
    }
  }
}

export default store
