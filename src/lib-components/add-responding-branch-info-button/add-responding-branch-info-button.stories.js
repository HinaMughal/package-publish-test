
import AddRespondingBranchInfoButton from './add-responding-branch-info-button.vue';
import CustomMDXDocumentation from './add-responding-branch-info-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AddRespondingBranchInfoButton',
  component:AddRespondingBranchInfoButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AddRespondingBranchInfoButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><add-responding-branch-info-button v-bind="args" @AddRespondingBranchInfoButton-onClick="onClick" @AddRespondingBranchInfoButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Add' , nativeType:"button" };
Primary.storyName = 'add_responding_branch_info_button';

