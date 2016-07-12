import Vue from 'vue'
import Button from 'src/components/Button'

describe('Button.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><tb-button>Hello World</tb-button></div>',
      components: { 'tb-button': Button }
    }).$mount()
    expect(vm.$el.querySelector('button').textContent).to.contain('Hello World')
  })
})
