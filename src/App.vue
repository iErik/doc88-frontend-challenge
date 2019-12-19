<template>
  <div id="app">
    <base-layout>
      <homepage />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from '@components/Layout/BaseLayout'
import Homepage from '@containers/Homepage'

export default {
  name: 'App',

  components: { BaseLayout, Homepage }
}
</script>

<style lang="sass">

#app
  width: 100vw
  height: 100vh

  background: repeat url('assets/pattern.png')

</style>
