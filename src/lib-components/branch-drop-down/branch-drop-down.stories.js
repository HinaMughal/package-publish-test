
import BranchDropDown from './branch-drop-down.vue';
import CustomMDXDocumentation from './branch-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'BranchDropDown',
  component:BranchDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BranchDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><branch-drop-down v-bind="args" @BranchDropDown-onChange="onChange" @BranchDropDown-onClick="onClick" @BranchDropDown-onBlur="onBlur" @BranchDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Branch' , value: [{ option: 'ISLAMIC BANKING SUKKHUR-5506',value:"1"  }, { option: 'ISLAMIC BANKING SUKKHUR-3307' ,value:"2" }] };





Primary.storyName = 'branch_drop_down';

