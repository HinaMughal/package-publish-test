
import TransactionNumbersDropDown from './transaction-numbers-drop-down.vue';
import CustomMDXDocumentation from './transaction-numbers-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransactionNumbersDropDown',
  component:TransactionNumbersDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionNumbersDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><transaction-numbers-drop-down v-bind="args" @TransactionNumbersDropDown-onChange="onChange" @TransactionNumbersDropDown-onClick="onClick" @TransactionNumbersDropDown-onBlur="onBlur" @TransactionNumbersDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Transaction' , value: [{ option: 'Default-1', value: "1" }, { option: 'Default-2', value: "2"  }] };



Primary.storyName = 'transaction_numbers_drop_down';

