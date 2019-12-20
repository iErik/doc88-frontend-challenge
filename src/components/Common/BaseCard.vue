<template>
  <div :class="['BaseCard', `-${type}`, { '-top-offset': topOffset }]">
    <div class="BaseCard-header">
      <slot name="header" />
    </div>

    <div class="BaseCard-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    type: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary'].includes(v)
    },

    topOffset: Boolean
  }
}
</script>

<style lang="sass">
@import '~@styles/reference/module'

$border-radius: 20px

.BaseCard
  display: flex
  flex-direction: column

  max-width: 1180px
  width: 100%

  border-radius: $border-radius
  background: $background-color
  box-shadow: 0px 0px 30px #740B0B45

  &.-top-offset &-header
      height: 93px

  &.-top-offset &-content
      margin-top: -40px

  &.-primary &-header
    background-color: $primary-color
    color: $secondary-color

  &.-secondary &-header
    background-color: $secondary-color
    color: $foreground-color

  &-header
    display: flex
    justify-content: space-between

    font-size: 24px
    font-style: italic
    font-weight: 700

    height: 80px
    padding: 25px 30px 0 30px

    border-top-left-radius: $border-radius
    border-top-right-radius: $border-radius

  &-content
    padding: 20px

</style>
