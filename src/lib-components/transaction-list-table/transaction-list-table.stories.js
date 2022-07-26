
import TransactionListTable from './transaction-list-table.vue';
import CustomMDXDocumentation from './transaction-list-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransactionListTable',
  component:TransactionListTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionListTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><transaction-list-table v-bind="args" @TransactionListTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Transaction'  };
Primary.storyName = 'transaction_list_table';

