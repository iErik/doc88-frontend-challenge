<template>
  <button
    :class="['BaseButton', { '-alternative': alternative }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="BaseButton-text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    disabled: Boolean,

    alternative: Boolean
  },

  computed: {
    classes () {
      return []
    }
  }
}
</script>

<style lang="sass">
@import '~@styles/reference/module'

.BaseButton
  display: flex
  align-items: center
  justify-content: center

  height: 60px
  width: 200px

  border-radius: 30px

  background-color: $primary-color
  color: #FFF

  &.-alternative
    background-color: $secondary-color
    color: $foreground-color

  &-text
    font-size: 20px
    font-weight: 900
    text-transform: uppercase
    letter-spacing: 0

</style>
