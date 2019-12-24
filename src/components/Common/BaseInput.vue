<template>
  <div :class="['BaseInput', `-${size}`, { '-has-error': error }]">
    <component
      v-if="!isMoney"
      :is="componentType"
      :class="['BaseInput-input', { '-textarea': textArea }]"
      v-html="textArea && value"
      v-bind="inputAttrs"
      v-on="inputListeners"
      :value="value"
    />

    <!-- This has to be a separate component declaration because we cannot
       - use the .native event modifier on a native HTML component, which
       - is necessary to filter negative values in the v-money component.
     -->
    <money
      v-else
      class="BaseInput-input"
      v-bind="inputAttrs"
      v-on="inputListeners"
      :value="value"
      @keydown.native="checkKey"
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

  // For whatever reason, the actual value inside the Input HTML element is
  // not really updated when the corresponding data changes by means other
  // than direct user interaction with the element. So I'll be using a (ugly)
  // workaround that I found here: http://tiny.cc/t9fyhz
  watch: {
    value (newVal, oldVal) {
      this.$el.querySelector('.BaseInput-input').value = newVal
    }
  },

  computed: {
    componentType () {
      return this.textArea ? 'textarea' : 'input'
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
    // VMoney has a annoying bug where it sometimes will re-emit the same
    // value multiple times, causing an infinite loop sometimes. It also
    // emits an string directly instead of a typical native Event object
    // from a regular input element.
    onInput (ev) {
      const value = typeof (ev.target || {}).value === 'string'
        ? (ev.target || {}).value
        : ev

      if (value !== this.value) this.$emit('input', value)
    },

    // Prevents the user from inserting a negative value.
    checkKey (event) {
      if (this.isMoney && this.positiveOnly && event.key === '-')
        event.preventDefault() && event.stopPropagation()
    }
  }
}
</script>

<style lang="sass">
@import '~@styles/_variables'

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
