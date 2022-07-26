
import CustomerBranchDropDown from './customer-branch-drop-down.vue';
import CustomMDXDocumentation from './customer-branch-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CustomerBranchDropDown',
  component: CustomerBranchDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CustomerBranchDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><customer-branch-drop-down v-bind="args" @CustomerBranchDropDown-onChange="onChange" @CustomerBranchDropDown-onClick="onClick" @CustomerBranchDropDown-onBlur="onBlur" @CustomerBranchDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Customer', value: [{ option: '1025-KHAYABAN-E-SHAMSHEER', value: "1" }, { option: '1023-KHAYABAN-E-BADAR', value: "2" }] };





Primary.storyName = 'customer_branch_drop_down';

