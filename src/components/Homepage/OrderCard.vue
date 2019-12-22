<template>
  <base-card class="OrderCard">
    <template slot="header">
      <h4 class="OrderCard-title">"{{ order.title }}"</h4>
      <p class="OrderCard-price">{{ orderPrice }}</p>
    </template>

    <div class="OrderCard-info-box">
      <base-image
        :class="['OrderCard-picture', { '-placeholder': !order.picture }]"
        :src="order.picture"
      />

      <div class="OrderCard-info-entry -flavor">
        <p class="OrderCard-info-entry-title">Sabor:</p>
        <p class="OrderCard-info-entry-value">{{ order.flavor }}</p>
      </div>
      <div class="OrderCard-info-entry -description">
        <p class="OrderCard-info-entry-title">Descrição:</p>
        <p class="OrderCard-info-entry-value">{{ order.description }}</p>
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
@import '~@styles/_variables'

.OrderCard
  // 1090px = 1180px - (180px / 2)
  // 180px = OrderCard-picture.width
  max-width: 1090px
  margin-left: 90px

  @media screen and (max-width: 1200px)
    max-width: calc(100% - 90px)

  @media screen and (max-width: 695px)
    .BaseCard-header
      flex-direction: column
      justify-content: flex-start

      height: 110px !important
      padding-left: 120px

  &:not(:last-child)
    margin-bottom: 30px

  &-title
    margin-left: 80px
    max-width: calc(100% - 30px)
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

    @media screen and (max-width: 920px)
      font-size: 18px

    @media screen and (max-width: 695px)
      margin-left: 0px
      margin-bottom: 5px

  &-price
    color: #FFF

    @media screen and (max-width: 920px)
      font-size: 20px

  &-picture
    position: absolute
    left: -110px
    top: -80px

    width: 180px
    height: 180px

    border-radius: 6px
    box-shadow: 0px 0px 30px #740B0B45

    &.-placeholder
      background-color: rgba(#EDEDED, .95)
      border: 3px solid $secondary-color
      background-image: url('../../assets/img-placeholder.png') !important
      background-size: 75%

  &-info-box
    position: relative
    display: flex
    flex-direction: column

    padding: 10px 0 15px 90px

  &-info-entry
    display: flex
    align-items: flex-start

    &.-flavor &-value
      max-width: 100%
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

    &.-description &-value
      word-break: break-word

    &:not(:last-child)
      margin-bottom: 16px

  &-info-entry-title
    font-size: 24px
    font-weight: 700
    font-style: italic
    margin-right: 10px

    @media screen and (max-width: 920px)
      font-size: 20px

  &-info-entry-value
    font-size: 24px
    font-weight: 400

    @media screen and (max-width: 920px)
      font-size: 20px

</style>
