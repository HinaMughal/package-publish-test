
import TotalNumberOfTransactionsTextBox from './total-number-of-transactions-text-box.vue';
import CustomMDXDocumentation from './total-number-of-transactions-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TotalNumberOfTransactionsTextBox',
  component:TotalNumberOfTransactionsTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TotalNumberOfTransactionsTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><total-number-of-transactions-text-box v-bind="args" @TotalNumberOfTransactionsTextBox-onChange="onChange" @TotalNumberOfTransactionsTextBox-onBlur="onBlur" @TotalNumberOfTransactionsTextBox-onFocus="onFocus" @TotalNumberOfTransactionsTextBox-onKeyPress="onKeyPress" @TotalNumberOfTransactionsTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Total' };
Primary.storyName = 'total_number_of_transactions_text_box';

