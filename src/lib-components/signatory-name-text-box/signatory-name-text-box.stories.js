import SignatoryNameTextBox from "./signatory-name-text-box.vue";
import CustomMDXDocumentation from "./signatory-name-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "SignatoryNameTextBox",
  component: SignatoryNameTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SignatoryNameTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><signatory-name-text-box v-bind="args" @SignatoryNameTextBox-onChange="onChange" @SignatoryNameTextBox-onBlur="onBlur" @SignatoryNameTextBox-onFocus="onFocus" @SignatoryNameTextBox-onKeyPress="onKeyPress" @SignatoryNameTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Signatory" };

Primary.storyName = "signatory_name_text_box";
