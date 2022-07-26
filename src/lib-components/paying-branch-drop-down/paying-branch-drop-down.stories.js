
import PayingBranchDropDown from './paying-branch-drop-down.vue';
import CustomMDXDocumentation from './paying-branch-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PayingBranchDropDown',
  component:PayingBranchDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PayingBranchDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><paying-branch-drop-down v-bind="args" @PayingBranchDropDown-onChange="onChange" @PayingBranchDropDown-onClick="onClick" @PayingBranchDropDown-onBlur="onBlur" @PayingBranchDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Paying Branch' , value: [{
  value: "1001",
  option: "Karachi Main - (1001)",
},
{
  value: "1003",
  option: "Shahrah-e-Faisal Karachi - (1002)",
}] };

Primary.storyName = 'paying_branch_drop_down';

