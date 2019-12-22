<template>
  <div class="BaseToggle">
    <p class="BaseToggle-label">{{ firstOption.label }}</p>

    <div class="BaseToggle-btn" @click="onToggle">
      <span :class="indicatorClasses" />
    </div>

    <p class="BaseToggle-label">{{ secondOption.label }}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseToggle',

  props: {
    value: {
      type: [String, Number, Boolean],
      required: true
    },

    /**
     * An object containing two keys, each key corresponds to the option's
     * label, and the value of the key would be the option's value itself.
     * ex: { 'Yes': true, 'No': false }
     */
    options: {
      type: Object,
      required: true,
      validator: v => Object.keys(v).length === 2
    }
  },

  computed: {
    indicatorClasses () {
      return [
        'BaseToggle-btn-indicator', {
          '-left': this.value === this.firstOption.value,
          '-right': this.value === this.secondOption.value
        }
      ]
    },

    firstOption () {
      const [label, value] = Object.entries(this.options)[0]
      return { label, value }
    },

    secondOption () {
      const [label, value] = Object.entries(this.options)[1]
      return { label, value }
    }
  },

  methods: {
    onToggle () {
      const value = this.value === this.firstOption.value
        ? this.secondOption.value
        : this.firstOption.value

      this.$emit('toggle', value)
    }
  }
}
</script>

<style lang="sass">
@import '~@styles/_variables'

.BaseToggle
  display: flex
  align-items: center

  &-label
    font-size: 16px
    font-weight: 400
    font-style: normal
    color: $foreground-color

  &-btn
    position: relative
    margin: 0 10px

    width: 42px
    height: 12px
    border-radius: 11px
    background-color: #FFF
    cursor: pointer

  &-btn-indicator
    position: absolute
    transform: translateY(-50%)
    transition: left 300ms ease
    top: 50%

    display: inline-block
    background-color: $primary-color

    cursor: pointer
    width: 20px
    height: 20px
    border-radius: 50%

    &.-left
      left: 0px

    &.-right
      left: calc(100% - 20px)

</style>
