import { shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/Common/BaseInput.vue'

describe('BaseInput', () => {
  it('Input element value reflects value prop changes', () => {
    const wrapper = shallowMount(BaseInput, { propsData: { value: 'Test' } })

    expect(wrapper.find('.BaseInput-input').element.value).toBe('Test')

    wrapper.setProps({ value: '' })
    expect(wrapper.find('.BaseInput-input').element.value).toBe('')
  })

  it('Input element properly displays validation errors', () => {
    const wrapper = shallowMount(BaseInput, {
      propsData: { value: '', error: 'Campo obrigatório.' }
    })

    expect(wrapper.find('.BaseInput-error').exists()).toBe(true)
    expect(wrapper.find('.BaseInput-error').text()).toBe('Campo obrigatório.')

    wrapper.setProps({ error: '' })
    expect(wrapper.find('.BaseInput-error').exists()).toBe(false)
  })

  it('Textarea value reflects value prop changes', () => {
    const wrapper = shallowMount(BaseInput, {
      propsData: { value: 'Test', textArea: true }
    })

    expect(wrapper.find('.BaseInput-input').element.value).toBe('Test')

    wrapper.setProps({ value: '' })
    expect(wrapper.find('.BaseInput-input').element.value).toBe('')
  })

  /**
   * I would like very much to test VMoney's currency mask in here but
   * apparently VMoney's custom components breaks jest for whatever reason
   * when I try to mount it, and the shallowMount doesn't seem to work
   * well either... :(
   */
})
