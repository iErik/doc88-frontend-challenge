<template>
  <div class="OrderList">
    <order-card
      v-for="(order, index) in orders"
      :key="index"
      :order="order"
    />
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

.OrderList
  display: flex
  flex-direction: column

  width: 100%

  margin-bottom: 75px

</style>
