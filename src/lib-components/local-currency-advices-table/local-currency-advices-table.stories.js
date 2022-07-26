
import LocalCurrencyAdvicesTable from './local-currency-advices-table.vue';
import CustomMDXDocumentation from './local-currency-advices-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'LocalCurrencyAdvicesTable',
  component:LocalCurrencyAdvicesTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LocalCurrencyAdvicesTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><local-currency-advices-table v-bind="args" @LocalCurrencyAdvicesTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Local'  };
Primary.storyName = 'local_currency_advices_table';

