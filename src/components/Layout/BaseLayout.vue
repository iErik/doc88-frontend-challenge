<template>
  <parallax-container class="BaseLayout">
    <div class="BaseLayout-header">
      <parallax-element
        :parallaxStrength="30"
        type="translation"
        tag="div"
        class="BaseLayout-parallax-el"
      >
        <img class="BaseLayout-doodle-parallax" src="@assets/pastel-parallax-trim.png" />
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

.BaseLayout
  position: relative

  display: flex
  flex-direction: column

  width: 100%
  height: 100%

  background: no-repeat url('../../assets/wave.svg')
  background-position: 0px 0px
  background-size: 100%

  &-header
    position: relative
    max-width: 1180px
    width: 100%
    margin: 0 auto

    display: flex
    justify-content: center

    padding-top: 60px
    padding-bottom: 25px

  &-parallax-el
    position: absolute
    left: -250px
    z-index: 20

  &-doodle
    position: absolute
    max-width: 390px
    right: -20px
    bottom: -160px

  &-doodle-parallax
    max-width: 390px

  &-logo
    max-width: 735px
    margin-right: 130px

  &-content
    position: relative
    z-index: 10
    flex-grow: 1

</style>
