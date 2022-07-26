
import CreditCardsCashCollectionsTable from './credit-cards-cash-collections-table.vue';
import CustomMDXDocumentation from './credit-cards-cash-collections-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CreditCardsCashCollectionsTable',
  component:CreditCardsCashCollectionsTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CreditCardsCashCollectionsTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><credit-cards-cash-collections-table v-bind="args" @CreditCardsCashCollectionsTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Credit'  };
Primary.storyName = 'credit_cards_cash_collections_table';

