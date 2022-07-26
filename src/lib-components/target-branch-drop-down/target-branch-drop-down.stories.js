
import TargetBranchDropDown from './target-branch-drop-down.vue';
import CustomMDXDocumentation from './target-branch-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TargetBranchDropDown',
  component:TargetBranchDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TargetBranchDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><target-branch-drop-down v-bind="args" @TargetBranchDropDown-onChange="onChange" @TargetBranchDropDown-onClick="onClick" @TargetBranchDropDown-onBlur="onBlur" @TargetBranchDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Target' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'target_branch_drop_down';

