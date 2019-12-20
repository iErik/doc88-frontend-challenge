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

$border-radius: 20px

.BaseCard
  display: flex
  flex-direction: column

  max-width: 1180px
  width: 100%

  border-radius: $border-radius
  background: #FFF
  box-shadow: 0px 0px 30px #740B0B45

  &.-top-offset &-content
    margin-top: -40px

  &.-primary &-header
    background-color: #E43636
    color: #FFCA00

  &.-secondary &-header
    background-color: #FFCA00
    color: #A03400

  &-header
    border-top-left-radius: $border-radius
    border-top-right-radius: $border-radius

    height: 80px

  &-content
    padding: 20px

</style>
