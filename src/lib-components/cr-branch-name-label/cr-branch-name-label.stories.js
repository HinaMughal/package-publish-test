
import CrBranchNameLabel from './cr-branch-name-label.vue';
import CustomMDXDocumentation from './cr-branch-name-label.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CrBranchNameLabel',
  component:CrBranchNameLabel,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CrBranchNameLabel },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><cr-branch-name-label v-bind="args" @CrBranchNameLabel-onClick="onClick" /> </el-form>',
  methods: {
    onClick: action("onClick"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Cr'  };
Primary.storyName = 'cr_branch_name_label';

