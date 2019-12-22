<template>
  <div class="Homepage">
    <form-card
      :order-type="orderType"
      @toggle-filter="toggleFilter"
      @submit="createOrder"
    />

    <transition name="Transition-fade">
      <order-list v-if="orders.length" :orders="orders" />
    </transition>
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
@import '~@styles/_variables'

.Homepage
  position: relative

  display: flex
  flex-direction: column
  align-items: center

  @media screen and (max-width: 1200px)
    padding: 0 50px

  max-width: 1180px
  margin: 0 auto
  height: 100%

  &-list-wrapper
    position: relative
    width: 100%

.Transition-fade
  &-enter-active, &-leave-active
    transition: transform 200ms, opacity 100ms ease

  &-enter, &-leave-to
    transform: translateY(50px)
    opacity: 0

</style>
