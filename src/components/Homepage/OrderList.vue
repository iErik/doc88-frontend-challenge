<template>
  <div class="OrderList">
    <div v-show="orders.length" class="OrderList-heading">
      <p class="OrderList-heading-text">
        Veja como será apresentado ao cliente
      </p>
    </div>

    <div class="OrderList-list">
      <order-card
        v-for="(order, index) in orders"
        :key="index"
        :order="order"
      />
    </div>
  </div>
</template>

<script>
import OrderCard from '@components/Homepage/OrderCard'

export default {
  name: 'OrderList',

  components: { OrderCard },

  props: {
    orders: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import '~@styles/_variables'

.OrderList
  display: flex
  align-items: center
  flex-direction: column

  width: 100%
  margin-bottom: 75px

  opacity: 1
  transform: translateY(0px)

  &-list
    width: 100%

  &-heading
    position: relative
    margin: 70px 0

    @media screen and (max-width: 610px)
      margin-top: 80px

    &-text
      position: relative
      padding: 0 50px
      z-index: 2

      font-size: 24px
      font-weight: 700
      font-style: italic
      background-color: $background-color
      color: $foreground-color

      @media screen and (max-width: 610px)
        font-size: 17px

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
