<template>
  <div class="BaseUpload">

    <img class="BaseUpload-placeholder-img" src="@assets/upload-icon.png">
    <span class="BaseUpload-placeholder-txt">
      Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.
    </span>

    <input
      ref="fileInput"
      class="BaseUpload-file-input"
      type="file"
      :accept="extensions"
      @change.prevent="onUpload"
    >
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

  padding: 20px 0

  border: 1px solid #E43636
  border-radius: 10px

  &-placeholder-img

  &-placeholder-txt
    margin-top: 5px

  &-file-input
    display: none

</style>
