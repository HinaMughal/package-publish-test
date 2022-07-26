
import ChargesWaiverTable from './charges-waiver-table.vue';
import CustomMDXDocumentation from './charges-waiver-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ChargesWaiverTable',
  component:ChargesWaiverTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ChargesWaiverTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><charges-waiver-table v-bind="args" @ChargesWaiverTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Charges'  };
Primary.storyName = 'charges_waiver_table';

