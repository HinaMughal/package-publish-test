
import TransactionDetailsButton from './transaction-details-button.vue';
import CustomMDXDocumentation from './transaction-details-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransactionDetailsButton',
  component:TransactionDetailsButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionDetailsButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><transaction-details-button v-bind="args" @TransactionDetailsButton-onClick="onClick" @TransactionDetailsButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Transaction' , nativeType:"button" };
Primary.storyName = 'transaction_details_button';

