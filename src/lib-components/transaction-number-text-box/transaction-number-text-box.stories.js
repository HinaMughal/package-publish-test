
import TransactionNumberTextBox from './transaction-number-text-box.vue';
import CustomMDXDocumentation from './transaction-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransactionNumberTextBox',
  component:TransactionNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><transaction-number-text-box v-bind="args" @TransactionNumberTextBox-onChange="onChange" @TransactionNumberTextBox-onBlur="onBlur" @TransactionNumberTextBox-onFocus="onFocus" @TransactionNumberTextBox-onKeyPress="onKeyPress" @TransactionNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Transaction' };
Primary.storyName = 'transaction_number_text_box';

