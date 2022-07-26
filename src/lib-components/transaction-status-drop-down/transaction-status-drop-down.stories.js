
import TransactionStatusDropDown from './transaction-status-drop-down.vue';
import CustomMDXDocumentation from './transaction-status-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransactionStatusDropDown',
  component:TransactionStatusDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionStatusDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><transaction-status-drop-down v-bind="args" @TransactionStatusDropDown-onChange="onChange" @TransactionStatusDropDown-onClick="onClick" @TransactionStatusDropDown-onBlur="onBlur" @TransactionStatusDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Transaction' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'transaction_status_drop_down';

