<template>
  <div :class="['BaseInput', `-${size}`, { '-has-error': error }]">
    <component
      :is="componentType"
      :class="['BaseInput-input', { '-textarea': textArea }]"
      ref="inputRef"
      v-html="textArea && value"
      v-bind="inputAttrs"
      v-on="inputListeners"
      :value="value"
    />

    <label v-if="error" class="BaseInput-error">{{ error }}</label>
  </div>
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'BaseInput',

  components: { Money },

  props: {
    value: [String, Number],

    error: String,

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

  watch: {
    value (newVal, oldVal) {
      this.$el.querySelector('.BaseInput-input').value = newVal
    }
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
@import '~@styles/reference/module'

.BaseInput
  position: relative
  width: 100%
  transition: margin 300ms ease

  &.-small
    max-width: 160px
  &.-medium
    max-width: 460px
  &.-full
    max-width: 100%

  &.-has-error
    margin-bottom: 40px

  &-error
    position: absolute
    left: 0px
    bottom: -25px
    padding-left: 5px

    font-size: 15px
    color: $primary-color

  &-input
    resize: none
    margin: 0

    border: 1px solid $primary-color
    border-radius: 10px

    width: 100%
    height: 40px

    padding: 10px 20px

    &, &::placeholder
      color: $foreground-color

    &.-textarea
      min-height: 80px

</style>
