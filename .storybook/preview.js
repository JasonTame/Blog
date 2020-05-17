import { addDecorator } from '@storybook/vue'

// Import global styles
require('../src/main.css')

const decoratorVueTemplate = () => {
  return { template: `<div class="p-3 max-w-6xl bg-red-500"><story/></div>` }
}
addDecorator(decoratorVueTemplate)
