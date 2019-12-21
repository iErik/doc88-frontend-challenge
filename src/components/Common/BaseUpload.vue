<template>
  <div class="BaseUpload">
    <base-image
      v-if="value"
      is-background
      class="BaseUpload-img-preview"
      :src="value"
    />

    <div v-else class="BaseUpload-drop-area" @drop.prevent="onUpload($event.dataTransfer)">
      <img
        class="BaseUpload-placeholder-img"
        src="@assets/upload-icon.png"
        @click="$refs['fileInput'].click()"
      >

      <span class="BaseUpload-placeholder-txt">
        Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.
      </span>
    </div>

    <input
      ref="fileInput"
      class="BaseUpload-file-input"
      type="file"
      :accept="extensions"
      @change.prevent="onUpload($refs['fileInput'])"
    >
  </div>
</template>

<script>
import BaseImage from '@common/BaseImage'

export default {
  name: 'BaseUpload',

  components: { BaseImage },

  props: {
    value: {
      value: [Array, File, Object],
      required: true
    },

    extensions: {
      type: Array,
      default: () => ['jpg', 'png']
    }
  },

  model: {
    prop: 'value',
    event: 'input'
  },

  methods: {
    onUpload ({ files }) {
      const file = files[0]
      const fileExt = file.name.split('.').pop().toLowerCase()
      const fileURL = URL.createObjectURL(file)

      if (this.extensions.includes(fileExt))
        this.$emit('input', fileURL)
    }
  }
}
</script>

<style lang="sass">
@import '~@styles/reference/module'

.BaseUpload
  display: flex
  flex-direction: column
  align-items: center

  padding: 20px 0

  border: 1px solid $primary-color
  border-radius: 10px

  &-img-preview
    width: 180px
    height: 180px
    border-radius: 6px

  &-drop-area
    display: flex
    flex-direction: column
    align-items: center

  &-placeholder-img
    cursor: pointer

  &-placeholder-txt
    margin-top: 5px

  &-file-input
    display: none

</style>
