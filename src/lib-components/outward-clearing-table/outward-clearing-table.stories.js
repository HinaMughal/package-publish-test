
import OutwardClearingTable from './outward-clearing-table.vue';
import CustomMDXDocumentation from './outward-clearing-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OutwardClearingTable',
  component:OutwardClearingTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OutwardClearingTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><outward-clearing-table v-bind="args" @OutwardClearingTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Outward'  };
Primary.storyName = 'outward_clearing_table';

