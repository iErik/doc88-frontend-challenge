import { mount, shallowMount } from '@vue/test-utils'
import FormCard from '@/components/Homepage/FormCard.vue'
import '../mock/matchMedia'


const formWrapper = mount(FormCard, { propsData: { orderType: 'food' } })
// A little bit of a hack...
const nextTick = formWrapper.vm.$nextTick

// Some elements we're going to be reusing in the tests
const titleInput = formWrapper.find('.BaseInput-input[name="title"]')
const flavorInput = formWrapper.find('.BaseInput-input[name="flavor"]')
const descriptionInput = formWrapper.find('.BaseInput-input[name="description"]')
const priceInput = formWrapper.find('.BaseInput-input[name="price"]')

const orderTypeToogle = formWrapper.find('.BaseToggle')
const clearFormBtn = formWrapper.find('.BaseButton[type="button"]')


describe('FormCard', () => {
  it('Form input values map directly to component state values', () => {
    const formData = {
      title: 'Título de teste',
      flavor: 'Sabor de teste',
      description: 'Apenas um teste',
      price: 2.30,
      orderType: 'food'
    }

    formWrapper.setData({ formData })
    nextTick(() => {
      expect(titleInput.element.value).toBe('Título de teste')
      expect(flavorInput.element.value).toBe('Sabor de teste')
      expect(descriptionInput.element.value).toBe('Apenas um teste')
      expect(priceInput.element.value).toBe('R$ 2,30')
    })
  })

  it('OrderType toggle works properly', () => {
    const toggleIndicator = orderTypeToogle.find('.BaseToggle-btn-indicator')

    orderTypeToogle.find('.BaseToggle-btn').trigger('click')
    expect(toggleIndicator.classes('-right')).toBe(true)

    orderTypeToogle.find('.BaseToggle-btn').trigger('click')
    expect(toggleIndicator.classes('-left')).toBe(true)
  })

  it('Clear form button works propery', () => {
    clearFormBtn.trigger('click')

    nextTick(() => {
      expect(titleInput.element.value).toBe('')
      expect(flavorInput.element.value).toBe('')
      expect(descriptionInput.element.value).toBe('')
      expect(priceInput.element.value).toBe('R$ 0,00')
    })
  })

  it('Error validation messages are displaying correctly', () => {
    nextTick(() => {
      expect(formWrapper.find('[name="title"] .BaseInput-error').exists()).toBe(true)
      expect(formWrapper.find('[name="title"] .BaseInput-error').text()).toBe('Campo obrigatório.')

      expect(formWrapper.find('[name="flavor"] .BaseInput-error').exists()).toBe(true)
      expect(formWrapper.find('[name="flavor"] .BaseInput-error').text()).toBe('Campo obrigatório.')

      expect(formWrapper.find('[name="price"] .BaseInput-error').exists()).toBe(true)
      expect(formWrapper.find('[name="price"] .BaseInput-error').text()).toBe('Campo obrigatório.')
    })
  })
})
