<template>
  <base-card class="OrderCard">
    <template slot="header">
      <h4 class="OrderCard-title">"{{ order.title }}"</h4>
      <p class="OrderCard-price">{{ orderPrice }}</p>
    </template>

    <div class="OrderCard-info-box">
      <base-image
        is-background
        class="OrderCard-picture"
        :src="order.picture"
      />

      <div class="OrderCard-info-entry">
        <p class="OrderCard-info-entry-title">Sabor:</p>
        <span class="OrderCard-info-entry-value">{{ order.flavor }}</span>
      </div>
      <div class="OrderCard-info-entry">
        <p class="OrderCard-info-entry-title">Descrição:</p>
        <span class="OrderCard-info-entry-value">{{ order.description }}</span>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseImage from '@common/BaseImage'
import BaseCard from '@common/BaseCard'

export default {
  name: 'OrderCard',

  components: { BaseCard, BaseImage },

  props: {
    order: {
      type: Object,
      required: true
    }
  },

  computed: {
    orderPrice () {
      const options = { style: 'currency', currency: 'BRL' }
      return (this.order.price || 0).toLocaleString('pt-BR', options)
    }
  }
}
</script>

<style lang="sass">

.OrderCard
  // 1090px = 1080px - (180px / 2)
  // 180px = OrderCard-picture.width
  max-width: 1090px
  margin-left: 90px

  &:not(:last-child)
    margin-bottom: 30px

  &-title
    margin-left: 80px

  &-price
    color: #FFF

  &-picture
    position: absolute
    left: -110px
    top: -80px

    width: 180px
    height: 180px

    border-radius: 6px
    box-shadow: 0px 0px 30px #740B0B45

  &-info-box
    position: relative
    display: flex
    flex-direction: column

    padding: 10px 0 15px 90px

  &-info-entry
    display: flex
    align-items: center

    &:not(:last-child)
      margin-bottom: 16px

  &-info-entry-title
    font-size: 24px
    font-weight: 700
    font-style: italic
    margin-right: 10px

  &-info-entry-value
    font-size: 24px
    font-weight: 400

</style>
