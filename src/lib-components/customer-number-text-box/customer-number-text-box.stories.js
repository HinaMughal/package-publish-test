import CustomerNumberTextBox from "./customer-number-text-box.vue";
import CustomMDXDocumentation from "./customer-number-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "CustomerNumberTextBox",
  component: CustomerNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CustomerNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><customer-number-text-box v-bind="args" @CustomerNumberTextBox-onChange="onChange" @CustomerNumberTextBox-onBlur="onBlur" @CustomerNumberTextBox-onFocus="onFocus" @CustomerNumberTextBox-onKeyPress="onKeyPress" @CustomerNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Customer" };

Primary.storyName = "customer_number_text_box";
