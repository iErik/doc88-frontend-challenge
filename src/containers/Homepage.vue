<template>
  <div class="Homepage">
    <form-card @submit="createOrder" />

    <div class="Homepage-separator">
      <span class="Homepage-separator-text">
        Veja como será apresentado ao cliente
      </span>
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

  &-separator
    margin: 70px 0

    &-text
      color: #A03400

  &-separator::before, &-separator::after
    display: inline-block
    content: ''

</style>
