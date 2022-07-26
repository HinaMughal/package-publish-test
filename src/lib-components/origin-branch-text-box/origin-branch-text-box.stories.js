
import OriginBranchTextBox from './origin-branch-text-box.vue';
import CustomMDXDocumentation from './origin-branch-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OriginBranchTextBox',
  component:OriginBranchTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OriginBranchTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><origin-branch-text-box v-bind="args" @OriginBranchTextBox-onChange="onChange" @OriginBranchTextBox-onBlur="onBlur" @OriginBranchTextBox-onFocus="onFocus" @OriginBranchTextBox-onKeyPress="onKeyPress" @OriginBranchTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Origin' };
Primary.args = { value : "PRINCIPLE OFFICE - 0786"}





Primary.storyName = 'origin_branch_text_box';

