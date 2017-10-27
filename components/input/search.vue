<script>
  import AtuInput from './input'
  import AtuIcon from '@/icon'

  export default {
    name: 'inputSearch',
    props: {
      addonAfter: String,
      addonBefore: String,
      autocomplete: {
        type: String,
        default: 'off'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      className: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      id: {
        type: String
      },
      name: {
        type: String
      },
      number: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      prefix: String,
      prefixCls: {
        type: String,
        default: 'ant-input'
      },
      readonly: {
        type: Boolean,
        default: false
      },
      size: String,
      suffix: String,
      type: {
        type: String
      },
      value: null
    },
    render (h) {
      const searchIcon = h(AtuIcon, {
        props: {
          type: 'search'
        },
        'class': 'ant-input-search-icon',
        slot: 'suffix',
        nativeOn: {
          click: () => {
            this.$emit('search', this.value)
          }
        }
      })
      return h(AtuInput, {
        props: this.$props,
        'class': 'ant-input-search',
        on: {
          input: (value) => this.$emit('input', value)
        }
      }, [searchIcon])
    }
  }
</script>
