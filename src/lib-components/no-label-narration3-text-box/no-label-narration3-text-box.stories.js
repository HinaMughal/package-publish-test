import NoLabelNarration3TextBox from "./no-label-narration3-text-box.vue";
import CustomMDXDocumentation from "./no-label-narration3-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "NoLabelNarration3TextBox",
  component: NoLabelNarration3TextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NoLabelNarration3TextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><no-label-narration3-text-box v-bind="args" @NoLabelNarration3TextBox-onChange="onChange" @NoLabelNarration3TextBox-onBlur="onBlur" @NoLabelNarration3TextBox-onFocus="onFocus" @NoLabelNarration3TextBox-onKeyPress="onKeyPress" @NoLabelNarration3TextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "No" };

Primary.storyName = "no_label_narration3_text_box";
