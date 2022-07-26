
import CurrencyWiseBatchTable from './currency-wise-batch-table.vue';
import CustomMDXDocumentation from './currency-wise-batch-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CurrencyWiseBatchTable',
  component:CurrencyWiseBatchTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CurrencyWiseBatchTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><currency-wise-batch-table v-bind="args" @CurrencyWiseBatchTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Currency'  };
Primary.storyName = 'currency_wise_batch_table';

