<template>
  <div class="BaseUpload">

    <input
      ref="fileInptu"
      class="BaseUpload-file-input"
      type="file"
      :accept="extensions"
      @change.prevent="onUpload"
    >

    <span class="BaseUpload-placeholder">
      Joque aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseUpload',

  props: {
    extensions: {
      type: Array,
      default: () => ['.jpg', '.png']
    }
  }
}
</script>

<style lang="sass">

.BaseUpload
  display: flex
  flex-direction: column
  align-items: center

  border: 1px solid #E43636
  border-radius: 10px

  &-file-input
    display: none

</style>
