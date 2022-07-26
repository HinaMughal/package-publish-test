
import EnterTransactionAmountTextBox from './enter-transaction-amount-text-box.vue';
import CustomMDXDocumentation from './enter-transaction-amount-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'EnterTransactionAmountTextBox',
  component:EnterTransactionAmountTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EnterTransactionAmountTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><enter-transaction-amount-text-box v-bind="args" @EnterTransactionAmountTextBox-onChange="onChange" @EnterTransactionAmountTextBox-onBlur="onBlur" @EnterTransactionAmountTextBox-onFocus="onFocus" @EnterTransactionAmountTextBox-onKeyPress="onKeyPress" @EnterTransactionAmountTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Enter' };
Primary.storyName = 'enter_transaction_amount_text_box';

