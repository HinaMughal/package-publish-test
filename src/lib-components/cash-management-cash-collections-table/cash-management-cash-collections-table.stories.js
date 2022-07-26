
import CashManagementCashCollectionsTable from './cash-management-cash-collections-table.vue';
import CustomMDXDocumentation from './cash-management-cash-collections-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CashManagementCashCollectionsTable',
  component:CashManagementCashCollectionsTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CashManagementCashCollectionsTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><cash-management-cash-collections-table v-bind="args" @CashManagementCashCollectionsTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Cash'  };
Primary.storyName = 'cash_management_cash_collections_table';

