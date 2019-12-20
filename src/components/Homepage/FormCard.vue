<template>
  <base-card top-offset type="secondary" class="FormCard">
    <template slot="header">
      <h4 class="title">Monte aqui o seu cardápio. O que está esperando?</h4>
      <base-switch />
    </template>

    <form class="FormCard-form" @submit.prevent="onSubmit">
      <div class="FormCard-form-group">
        <base-input
          class="FormCard-form-input"
          size="medium"
          type="text"
          placeholder="Título do pedido"
          name="title"
          v-model="formData.title"
        />

        <base-input
          class="FormCard-form-input"
          size="medium"
          type="text"
          placeholder="Sabor"
          name="flavor"
          v-model="formData.flavor"
        />

        <base-input
          is-money
          class="FormCard-form-input"
          size="small"
          type="text"
          placeholder="R$"
          name="price"
          v-model="formData.price"
        />
      </div>

      <base-input
        class="FormCard-form-input"
        text-area
        placeholder="Descrição"
        v-model="formData.description"
      />

      <base-upload />
    </form>

    <div class="FormCard-actions">
      <base-button class="FormCard-action">
        Limpar
      </base-button>
      <base-button alternative class="FormCard-action">
        Cadastrar
      </base-button>
    </div>
  </Base-card>
</template>

<script>
import BaseButton from '@common/BaseButton'
import BaseSwitch from '@common/BaseSwitch'
import BaseUpload from '@common/BaseUpload'
import BaseInput from '@common/BaseInput'

import BaseCard from '@common/BaseCard'

export default {
  name: 'FormCard',

  components: {
    BaseCard,
    BaseInput,
    BaseButton,
    BaseSwitch,
    BaseUpload
  },

  data: () => ({
    formData: {
      title: '',
      flavor: '',
      price: '',
      description: '',
      picture: ''
    }
  }),

  methods: {
    onSubmit () {}
  }
}
</script>

<style lang="sass">

.FormCard

  &-form

    &-input
      margin-bottom: 20px

    &-group
      display: flex
      justify-content: space-between

  &-actions
    display: flex
    justify-content: center

    margin-top: 20px
    margin-bottom: -45px

  &-action:not(:last-child)
    margin-right: 35px

</style>
