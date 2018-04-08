import Vue from 'vue'
import SearchBar from '@/components/SearchBar'
import { shallow } from '@vue/test-utils'

describe('SearchBar.vue', () => {
  it('should render input', () => {
    const Constructor = Vue.extend(SearchBar)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('input'))
      .toBeDefined()
  })
  it('should update model', () => {
    const wrapper = shallow(SearchBar)
    wrapper.vm.term = 'My new value'
    wrapper.find('input').trigger('keydown');
    expect(wrapper.vm.term).toBe('My new value')
  })
  it('should emit change term', () => {
    const stub = jest.fn()
    const wrapper = shallow(SearchBar)
    wrapper.setMethods({ inputTermChange: stub })
    wrapper.vm.term = 'My new value'
    wrapper.find('input').trigger('keydown');
    expect(stub).toBeCalled()
  })
})
