
import TransactionType from './transaction-type.vue';
import CustomMDXDocumentation from './transaction-type.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransactionType',
  component: TransactionType,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionType },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><transaction-type v-bind="args" @TransactionType-onChange="onChange" @TransactionType-onClick="onClick" @TransactionType-onBlur="onBlur" @TransactionType-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Transaction', value: [{ option: 'All Unauthorize', value: "1" }, { option: 'Authorize', value: "2" }] };

Primary.storyName = 'transaction_type';

