
import CreditCardsFundsTransferTable from './credit-cards-funds-transfer-table.vue';
import CustomMDXDocumentation from './credit-cards-funds-transfer-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CreditCardsFundsTransferTable',
  component:CreditCardsFundsTransferTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CreditCardsFundsTransferTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><credit-cards-funds-transfer-table v-bind="args" @CreditCardsFundsTransferTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Credit'  };
Primary.storyName = 'credit_cards_funds_transfer_table';

