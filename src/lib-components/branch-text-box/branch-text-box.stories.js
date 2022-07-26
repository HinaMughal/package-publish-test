
import BranchTextBox from './branch-text-box.vue';
import CustomMDXDocumentation from './branch-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'BranchTextBox',
  component:BranchTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BranchTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><branch-text-box v-bind="args" @BranchTextBox-onChange="onChange" @BranchTextBox-onBlur="onBlur" @BranchTextBox-onFocus="onFocus" @BranchTextBox-onKeyPress="onKeyPress" @BranchTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Branch' };
Primary.storyName = 'branch_text_box';

