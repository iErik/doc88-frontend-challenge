<template>
  <base-card top-offset type="secondary" class="FormCard">
    <template slot="header">
      <h4 class="FormCard-title">Monte aqui o seu cardápio. O que está esperando?</h4>
      <base-toggle
        :options="{ 'Comida': 'food', 'Bebida': 'drink' }"
        :value="formData.type"
        @toggle="toggleType"
      />
    </template>

    <form name="formData" class="FormCard-form" @submit.prevent="onSubmit">
      <div class="FormCard-form-input-group">
        <base-input
          class="FormCard-form-input"
          type="text"
          placeholder="Título do pedido"
          name="title"
          :size="isMobile ? 'full' : 'medium'"
          :error="fieldErr('title')"
          v-model="formData.title"
        />

        <base-input
          class="FormCard-form-input"
          type="text"
          placeholder="Sabor"
          name="flavor"
          :size="isMobile ? 'full' : 'medium'"
          :error="fieldErr('flavor')"
          v-model="formData.flavor"
        />

        <base-input
          is-money
          class="FormCard-form-input"
          type="text"
          placeholder="R$"
          name="price"
          :size="isMobile ? 'full' : 'small'"
          :error="fieldErr('price')"
          v-model="formData.price"
        />
      </div>

      <base-input
        class="FormCard-form-input"
        text-area
        placeholder="Descrição"
        v-model="formData.description"
      />

      <base-upload v-model="formData.picture" />

      <div class="FormCard-actions">
        <base-button class="FormCard-action" type="button" @click="clearForm">
          Limpar
        </base-button>
        <base-button alternative class="FormCard-action">
          Cadastrar
        </base-button>
      </div>
    </form>
  </Base-card>
</template>

<script>
import FormValidator from 'zee-validator'
import MediaQuery from '@mixins/MediaQuery'

import BaseButton from '@common/BaseButton'
import BaseToggle from '@common/BaseToggle'
import BaseUpload from '@common/BaseUpload'
import BaseInput from '@common/BaseInput'

import BaseCard from '@common/BaseCard'

const initialState = {
  title: '',
  flavor: '',
  price: 0,
  description: '',
  picture: null
}

export default {
  name: 'FormCard',

  mixins: [ MediaQuery, FormValidator ],

  components: {
    BaseCard,
    BaseInput,
    BaseButton,
    BaseToggle,
    BaseUpload
  },

  validations: {
    formData: {
      title: 'required|minLength:3|maxLength:60',
      flavor: 'required|minLength:3|maxLength:60',
      price: 'required|numeric'
    }
  },

  props: {
    orderType: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      formData: {
        ...initialState,
        type: this.orderType
      }
    }
  },

  methods: {
    onSubmit () {
      const isValid = this.$validator.validateAll()

      if (isValid) {
        this.$emit('submit', { ...this.formData })
        this.clearForm()
        this.$nextTick(() => this.$validator.reset())
      }
    },

    fieldErr (fieldName) {
      const field = this.$validator.fields.get(fieldName)

      if (!field) return ''
      return field.errors[0] || ''
    },

    clearForm () {
      this.formData = { ...this.formData, ...initialState }
    },

    toggleType (type) {
      this.formData.type = type
      this.$emit('toggle-filter', type)
    }
  }
}
</script>

<style lang="sass">

.FormCard
  &-title
    padding-left: 40px

    @media screen and (max-width: 920px)
      font-size: 18px

  &-form-input
    margin-bottom: 20px

  &-form-input-group
    display: flex
    justify-content: space-between

    @media screen and (max-width: 1200px)
      flex-direction: column

  &-actions
    display: flex
    justify-content: center

    margin-top: 20px
    margin-bottom: -45px

  &-action:not(:last-child)
    margin-right: 35px

</style>
