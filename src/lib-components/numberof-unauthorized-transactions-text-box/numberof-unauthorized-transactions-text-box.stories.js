
import NumberofUnauthorizedTransactionsTextBox from './numberof-unauthorized-transactions-text-box.vue';
import CustomMDXDocumentation from './numberof-unauthorized-transactions-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NumberofUnauthorizedTransactionsTextBox',
  component:NumberofUnauthorizedTransactionsTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NumberofUnauthorizedTransactionsTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><numberof-unauthorized-transactions-text-box v-bind="args" @NumberofUnauthorizedTransactionsTextBox-onChange="onChange" @NumberofUnauthorizedTransactionsTextBox-onBlur="onBlur" @NumberofUnauthorizedTransactionsTextBox-onFocus="onFocus" @NumberofUnauthorizedTransactionsTextBox-onKeyPress="onKeyPress" @NumberofUnauthorizedTransactionsTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Numberof' };
Primary.storyName = 'numberof_unauthorized_transactions_text_box';

