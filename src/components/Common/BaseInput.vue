<template>
  <component
    :is="componentType"
    :class="['BaseInput', `-${size}`, { '-textarea': textArea }]"
    v-html="textArea && value"
    v-bind="inputAttrs"
    v-on="inputListeners"
    :value="value"
  />
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'BaseInput',

  components: { Money },

  props: {
    value: [String, Number],

    textArea: Boolean,

    isMoney: Boolean,

    positiveOnly: Boolean,

    size: {
      type: String,
      default: 'full',
      validator: v => ['small', 'medium', 'full'].includes(v)
    },

    moneyMask: {
      type: Object,
      default: () => ({
        prefix: 'R$ ',
        decimal: ',',
        thousands: '.'
      })
    }
  },

  model: {
    prop: 'value',
    event: 'input'
  },

  computed: {
    componentType () {
      return this.isMoney ? 'money' : this.textArea ? 'textarea' : 'input'
    },

    inputListeners () {
      return {
        ...this.$listeners,
        input: this.onInput,
        update: this.onInput
      }
    },

    inputAttrs () {
      return { ...this.$attrs, ...(this.isMoney ? this.moneyMask : {}) }
    }
  },

  methods: {
    onInput (ev) {
      const value = typeof (ev.target || {}).value === 'string'
        ? (ev.target || {}).value
        : ev

      if (value !== this.value) this.$emit('input', value)
    }
  }
}
</script>

<style lang="sass">

.BaseInput
  resize: none
  margin: 0

  border: 1px solid #E43636
  border-radius: 10px

  width: 100%
  height: 40px

  padding: 10px 20px

  &, &::placeholder
    color: #A03400

  &.-textarea
    min-height: 80px

  &.-small
    max-width: 160px
  &.-medium
    max-width: 460px
  &.-full
    max-width: 100%

</style>
