import TotalChargesTextBox from "./total-charges-text-box.vue";
import CustomMDXDocumentation from "./total-charges-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "TotalChargesTextBox",
  component: TotalChargesTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TotalChargesTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><total-charges-text-box v-bind="args" @TotalChargesTextBox-onChange="onChange" @TotalChargesTextBox-onBlur="onBlur" @TotalChargesTextBox-onFocus="onFocus" @TotalChargesTextBox-onKeyPress="onKeyPress" @TotalChargesTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Total" };

Primary.storyName = "total_charges_text_box";
