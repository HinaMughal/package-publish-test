import SignatoryInformationTextBox from "./signatory-information-text-box.vue";
import CustomMDXDocumentation from "./signatory-information-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "SignatoryInformationTextBox",
  component: SignatoryInformationTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SignatoryInformationTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><signatory-information-text-box v-bind="args" @SignatoryInformationTextBox-onChange="onChange" @SignatoryInformationTextBox-onBlur="onBlur" @SignatoryInformationTextBox-onFocus="onFocus" @SignatoryInformationTextBox-onKeyPress="onKeyPress" @SignatoryInformationTextBox-onKeyUp="onKeyUp" /> </el-form>',
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

Primary.storyName = "signatory_information_text_box";
