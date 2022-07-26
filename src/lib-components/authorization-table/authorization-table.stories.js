
import AuthorizationTable from './authorization-table.vue';
import CustomMDXDocumentation from './authorization-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AuthorizationTable',
  component:AuthorizationTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AuthorizationTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><authorization-table v-bind="args" @AuthorizationTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Authorization'  };
Primary.storyName = 'authorization_table';

