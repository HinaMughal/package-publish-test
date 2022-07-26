
import ControllingSubBranchRadioButton from './controlling-sub-branch-radio-button.vue';
import CustomMDXDocumentation from './controlling-sub-branch-radio-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ControllingSubBranchRadioButton',
  component:ControllingSubBranchRadioButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ControllingSubBranchRadioButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><controlling-sub-branch-radio-button v-bind="args" @ControllingSubBranchRadioButton-onChange="onChange" @ControllingSubBranchRadioButton-onClick="onClick" @ControllingSubBranchRadioButton-onBlur="onBlur" @ControllingSubBranchRadioButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
 
 
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Controlling'  };
Primary.storyName = 'controlling_sub_branch_radio_button';

