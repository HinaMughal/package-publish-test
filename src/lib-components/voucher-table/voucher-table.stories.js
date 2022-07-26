
import VoucherTable from './voucher-table.vue';
import CustomMDXDocumentation from './voucher-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'VoucherTable',
  component:VoucherTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VoucherTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><voucher-table v-bind="args" @VoucherTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Voucher'  };
Primary.storyName = 'voucher_table';

