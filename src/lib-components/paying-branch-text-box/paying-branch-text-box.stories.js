
import PayingBranchTextBox from './paying-branch-text-box.vue';
import CustomMDXDocumentation from './paying-branch-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PayingBranchTextBox',
  component:PayingBranchTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PayingBranchTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><paying-branch-text-box v-bind="args" @PayingBranchTextBox-onChange="onChange" @PayingBranchTextBox-onBlur="onBlur" @PayingBranchTextBox-onFocus="onFocus" @PayingBranchTextBox-onKeyPress="onKeyPress" @PayingBranchTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Paying' };





Primary.storyName = 'paying_branch_text_box';

