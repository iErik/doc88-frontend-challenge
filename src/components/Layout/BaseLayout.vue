<template>
  <div class="BaseLayout">
    <div class="BaseLayout-header">
      <img class="BaseLayout-logo" src="@assets/Logo.svg" alt="Pastel de ideais">
    </div>

    <div class="BaseLayout-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>

<style lang="sass">

.BaseLayout
  width: 100%
  height: 100%

  /*
    background: no-repeat url('../../assets/wave.svg')
    background-size: 100%
    background-position: 0% -10%
    background-attachment: fixed

  &-header
    display: flex
    justify-content: center

    padding-top: 60px
    padding-bottom: 25px

  &-logo
    max-width: 735px

  &-content

</style>
