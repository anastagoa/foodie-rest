import { shallowMount } from '@vue/test-utils'
import CustomButton from '@/components/ui/CustomButton.vue'

describe('CustomButton.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'new label'
    const wrapper = shallowMount(CustomButton, {
      props: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
