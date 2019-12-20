<template>
  <div class="Homepage">
    <form-card @submit="createOrder" />

    <div class="Homepage-separator">
      <p class="Homepage-separator-text">
        Veja como será apresentado ao cliente
      </p>
    </div>

    <order-list :orders="orders" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '@store/types'

import FormCard from '@components/Homepage/FormCard'
import OrderList from '@components/Homepage/OrderList'

export default {
  name: 'Homepage',

  components: {
    FormCard,
    OrderList
  },

  computed: {
    ...mapGetters({ orders: types.ORDER_LIST })
  },

  methods: {
    ...mapActions({ createOrder: types.NEW_ORDER })
  }
}
</script>

<style lang="sass">

.Homepage
  display: flex
  flex-direction: column
  align-items: center

  box-shadow: 0 320px 140px 220px #FFF
  background-color: #FFF

  max-width: 1180px
  margin: 0 auto
  height: 100%

  &-separator
    position: relative
    margin: 70px 0

    &-text
      position: relative
      z-index: 2

      padding: 0 50px
      background-color: #FFF
      color: #A03400

    &::after,
      position: absolute
      display: inline-block
      content: ''
      z-index: 1

      background: #E43636

      top: 50%
      left: calc(-100vw / 2 + 100% / 2)

      width: 100vw
      height: 1px

</style>
