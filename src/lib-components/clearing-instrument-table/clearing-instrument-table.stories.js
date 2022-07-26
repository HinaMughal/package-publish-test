
import ClearingInstrumentTable from './clearing-instrument-table.vue';
import CustomMDXDocumentation from './clearing-instrument-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ClearingInstrumentTable',
  component:ClearingInstrumentTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ClearingInstrumentTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><clearing-instrument-table v-bind="args" @ClearingInstrumentTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Clearing'  };
Primary.storyName = 'clearing_instrument_table';

