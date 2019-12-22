<template>
  <parallax-container class="BaseLayout">
    <div class="BaseLayout-header">
      <div class="BaseLayout-background" />

      <parallax-element
        :parallaxStrength="30"
        type="translation"
        tag="div"
        class="BaseLayout-parallax-el"
      >
        <img class="BaseLayout-doodle-parallax" src="@assets/pastel-parallax.png" />
      </parallax-element>

      <img class="BaseLayout-logo" src="@assets/Logo.svg" alt="Pastel de ideais">
      <img class="BaseLayout-doodle" src="@assets/pasteis.png" />
    </div>

    <div class="BaseLayout-content">
      <slot />
    </div>
  </parallax-container>
</template>

<script>
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

export default {
  name: 'BaseLayout',

  components: { ParallaxContainer, ParallaxElement }
}
</script>

<style lang="sass">
@import '~@styles/reference/module'

$z-index-0: 5
$z-index-1: 10
$z-index-2: 20

.BaseLayout
  position: relative

  display: flex
  flex-direction: column

  width: 100%
  height: 100%

  &-background
    position: fixed
    left: 0px
    right: 0px
    z-index: $z-index-1

    width: 100%
    height: 100%
    background: no-repeat url('../../assets/wave.svg')
    background-position: 0px 0px
    background-size: 100%

    @media screen and (max-width: 1890px)
      background-size: 130%

    @media screen and (max-width: 1370px)
      background-size: 160%

    @media screen and (max-width: 1085px)
      background-size: 230%

    @media screen and (max-width: 690px)
      background-size: 320%

  &-header
    position: relative
    max-width: 1180px
    width: 100%
    margin: 0 auto

    display: flex
    justify-content: center

    &::before
      content: ''
      display: inline-block
      position: fixed

      width: 100%
      height: 100%
      max-width: 1180px
      z-index: $z-index-0

      box-shadow: 0 320px 140px 220px $background-color
      background-color: $background-color

  &-parallax-el
    position: absolute
    top: 60px
    left: -250px
    z-index: $z-index-2

  &-doodle
    position: absolute
    max-width: 390px
    right: -20px
    bottom: -160px
    z-index: $z-index-1

  &-doodle-parallax
    max-width: 390px

  &-logo
    max-width: 735px
    margin: 60px 130px 25px 0
    z-index: $z-index-1

  &-content
    position: relative
    z-index: $z-index-1
    flex-grow: 1

</style>
