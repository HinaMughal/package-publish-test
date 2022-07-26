
import InterBranchAdvicesTable from './inter-branch-advices-table.vue';
import CustomMDXDocumentation from './inter-branch-advices-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'InterBranchAdvicesTable',
  component:InterBranchAdvicesTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InterBranchAdvicesTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><inter-branch-advices-table v-bind="args" @InterBranchAdvicesTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Inter'  };
Primary.storyName = 'inter_branch_advices_table';

