<template>
<span @click="_onClick" @key>

</span>
</template>

<script>
import { defaultProps } from '../../utils'
import request from './request'
import uid from 'uid'

export default {
  props: defaultProps({
    action: String,
    name: String,
    multiple: Boolean,
    data: Object,
    onStart: () => {},
    onProgress: () => {},
    onSuccess: () => {},
    onError: () => {},
    beforeUpload: () => {}
  }),

  methods: {
    _onChange (e) {
      const files = e.target.files
      this.uploadFiles(files)
    },

    _onClick () {
      const el = this.$els.file
      if (!el) return

      el.click()
      el.value = ''
    },

    _onKeyDown (e) {
      if (e.key === 'Enter') {
        this._onClick()
      }
    },

    _onFileDrop (e) {
      if (e.type === 'dragover') {
        return e.preventDefault()
      }

      const files = e.dataTransfer.files
      this._uploadFiles(files)

      e.preventDefault()
    },

    _uploadFiles (files) {
      const len = files.length
      if (len > 0) {
        for (let i = 0; i < len; i++) {
          const file = files.item(i)
          file.uid = uid()
          this._upload(file)
        }

        if (this.multiple) {
          this._onStart(Array.prototype.slice.call(files))
        } else {
          this._onStart(Array.prototype.slice.call(files)[0])
        }
      }
    },

    _upload (file) {
      if (!this.beforeUpload) {
        return this._post(file)
      }

      const before = this.beforeUpload(file)
      if (before && before.then) {
        before.then(() => {
          this._post(file)
        })
      } else if (before !== false) {
        this._post(file)
      }
    },

    _post (file) {
      let data = this.data
      if (typeof data === 'function') {
        data = data()
      }

      request({
        action: this.action,
        filename: this.name,
        file: file,
        data: data,
        onProgress: e => {
          this.onProgress(e, file)
        },
        onSuccess: ret => {
          this.onSuccess(ret, file)
        },
        onError: (err, ret) => {
          this.onError(err, ret, file)
        },
      })
    }
  }
}

</script>