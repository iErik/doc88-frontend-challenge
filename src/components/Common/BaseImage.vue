<template>
  <div
    :style="{ backgroundImage: `url(${src})` }"
    class="BaseImage"
  >
    <img
      v-bind="$attrs"
      :src="src"
      class="BaseImage-fallback"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseImage',

  props: {
    src: String
  }
}
</script>

<style lang="sass">

.BaseImage
  display: inline-block
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  overflow: hidden
  max-width: 100%

  &-fallback
    visibility: hidden
    max-width: 100%

</style>
