<template>
  <div class="Homepage">
    <form-card
      :order-type="orderType"
      @toggle-filter="toggleFilter"
      @submit="createOrder"
    />

    <div v-show="orders.length" class="Homepage-separator">
      <p class="Homepage-separator-text">
        Veja como será apresentado ao cliente
      </p>
    </div>

    <order-list v-if="orders.length" :orders="orders" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '@store/types'

import FormCard from '@components/Homepage/FormCard'
import OrderList from '@components/Homepage/OrderList'

export default {
  name: 'Homepage',

  components: { FormCard, OrderList },

  computed: mapGetters({
    orders: types.ORDER_LIST,
    orderType: types.ORDER_LIST_FILTER
  }),

  methods: mapActions({
    createOrder: types.NEW_ORDER,
    toggleFilter: types.ORDER_LIST_FILTER
  })
}
</script>

<style lang="sass">
@import '~@styles/reference/module'

.Homepage
  display: flex
  flex-direction: column
  align-items: center

  box-shadow: 0 320px 140px 220px $background-color
  background-color: $background-color

  max-width: 1180px
  margin: 0 auto
  height: 100%

  &-separator
    position: relative
    margin: 70px 0

    &-text
      position: relative
      padding: 0 50px
      z-index: 2

      font-size: 24px
      font-weight: 700
      font-style: italic
      background-color: $background-color
      color: $foreground-color

    &::after,
      position: absolute
      display: inline-block
      content: ''
      z-index: 1

      background: $primary-color

      top: 50%
      left: calc(-100vw / 2 + 100% / 2)

      width: 100vw
      height: 1px

</style>
