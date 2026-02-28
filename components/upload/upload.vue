<template>
  <div :class="wrapClasses">
    <div
      :class="triggerClasses"
      @click="handleClick"
    >
      <input
        ref="fileInput"
        type="file"
        :class="`${prefixCls}-input`"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        @change="handleFileChange"
        style="display: none"
      >
      <slot>
        <div v-if="listType === 'picture-card'" :class="`${prefixCls}-picture-card-trigger`">
          <icon type="plus"></icon>
          <div :class="`${prefixCls}-text`">Upload</div>
        </div>
        <template v-else>
          <button :class="buttonClasses" :disabled="disabled">
            <icon type="upload"></icon>
            <span>Click to Upload</span>
          </button>
        </template>
      </slot>
    </div>
    <div v-if="showUploadList && innerFileList.length" :class="listClasses">
      <div
        v-for="(file, index) in innerFileList"
        :key="file.uid || index"
        :class="itemClasses(file)"
      >
        <template v-if="listType === 'picture' || listType === 'picture-card'">
          <span :class="`${prefixCls}-list-item-thumbnail`">
            <img v-if="file.thumbUrl || file.url" :src="file.thumbUrl || file.url" :alt="file.name">
            <icon v-else type="file"></icon>
          </span>
        </template>
        <span v-else :class="`${prefixCls}-list-item-icon`">
          <icon type="paper-clip"></icon>
        </span>
        <span :class="`${prefixCls}-list-item-name`">{{ file.name }}</span>
        <span :class="`${prefixCls}-list-item-actions`">
          <icon type="cross" @click.native="handleRemove(file, index)"></icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'
  import { oneOf } from '../_util/proptype'

  let uid = 0

  export default {
    name: 'atu-upload',
    props: {
      action: {
        type: String,
        default: ''
      },
      accept: {
        type: String,
        default: ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showUploadList: {
        type: Boolean,
        default: true
      },
      listType: {
        type: String,
        default: 'text',
        validator (value) {
          return oneOf(value, ['text', 'picture', 'picture-card'])
        }
      },
      fileList: {
        type: Array,
        default: undefined
      },
      beforeUpload: {
        type: Function,
        default: undefined
      },
      prefixCls: {
        type: String,
        default: 'ant-upload'
      }
    },
    data () {
      return {
        innerFileList: this.fileList ? [].concat(this.fileList) : []
      }
    },
    computed: {
      wrapClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-disabled`]: this.disabled,
            [`${this.prefixCls}-picture-card`]: this.listType === 'picture-card'
          }
        ]
      },
      triggerClasses () {
        return [
          `${this.prefixCls}-trigger`,
          {
            [`${this.prefixCls}-trigger-disabled`]: this.disabled
          }
        ]
      },
      listClasses () {
        return [
          `${this.prefixCls}-list`,
          `${this.prefixCls}-list-${this.listType}`
        ]
      },
      buttonClasses () {
        return [
          'ant-btn',
          {
            'ant-btn-disabled': this.disabled
          }
        ]
      }
    },
    watch: {
      fileList (val) {
        if (val) {
          this.innerFileList = [].concat(val)
        }
      }
    },
    methods: {
      handleClick () {
        if (this.disabled) return
        this.$refs.fileInput.click()
      },
      handleFileChange (e) {
        const files = e.target.files
        if (!files || !files.length) return
        const fileArray = Array.prototype.slice.call(files)
        fileArray.forEach(file => {
          file.uid = 'upload-' + (++uid)
          file.status = 'done'
          if (this.beforeUpload) {
            const result = this.beforeUpload(file, this.innerFileList)
            if (result === false) return
          }
          this.innerFileList.push(file)
        })
        this.$emit('change', {
          file: fileArray[fileArray.length - 1],
          fileList: this.innerFileList
        })
        this.$refs.fileInput.value = ''
      },
      handleRemove (file, index) {
        const removedFile = this.innerFileList.splice(index, 1)[0]
        this.$emit('remove', removedFile)
        this.$emit('change', {
          file: removedFile,
          fileList: this.innerFileList
        })
      },
      itemClasses (file) {
        return [
          `${this.prefixCls}-list-item`,
          {
            [`${this.prefixCls}-list-item-done`]: file.status === 'done',
            [`${this.prefixCls}-list-item-error`]: file.status === 'error'
          }
        ]
      }
    },
    components: {
      Icon
    }
  }
</script>
