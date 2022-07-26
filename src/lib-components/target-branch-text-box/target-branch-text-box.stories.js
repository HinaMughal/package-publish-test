import TargetBranchTextBox from "./target-branch-text-box.vue";
import CustomMDXDocumentation from "./target-branch-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "TargetBranchTextBox",
  component: TargetBranchTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TargetBranchTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><target-branch-text-box v-bind="args" @TargetBranchTextBox-onChange="onChange" @TargetBranchTextBox-onBlur="onBlur" @TargetBranchTextBox-onFocus="onFocus" @TargetBranchTextBox-onKeyPress="onKeyPress" @TargetBranchTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Target" };

Primary.storyName = "target_branch_text_box";
