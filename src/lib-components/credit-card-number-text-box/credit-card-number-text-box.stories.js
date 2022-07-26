
import CreditCardNumberTextBox from './credit-card-number-text-box.vue';
import CustomMDXDocumentation from './credit-card-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CreditCardNumberTextBox',
  component:CreditCardNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CreditCardNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><credit-card-number-text-box v-bind="args" @CreditCardNumberTextBox-onChange="onChange" @CreditCardNumberTextBox-onBlur="onBlur" @CreditCardNumberTextBox-onFocus="onFocus" @CreditCardNumberTextBox-onKeyPress="onKeyPress" @CreditCardNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Credit' };





Primary.storyName = 'credit_card_number_text_box';

