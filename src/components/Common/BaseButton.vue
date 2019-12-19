<template>
  <button
    class="BaseButton"
  >

  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    disabled: Boolean
  },

  computed: {
    classes () {
      return []
    }
  }
}
</script>

<style lang="sass">

</style>
