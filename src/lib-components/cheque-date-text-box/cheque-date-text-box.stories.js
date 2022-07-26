import ChequeDateTextBox from "./cheque-date-text-box.vue";
import CustomMDXDocumentation from "./cheque-date-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "ChequeDateTextBox",
  component: ChequeDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ChequeDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><cheque-date-text-box v-bind="args" @ChequeDateTextBox-onChange="onChange" @ChequeDateTextBox-onBlur="onBlur" @ChequeDateTextBox-onFocus="onFocus" @ChequeDateTextBox-onKeyPress="onKeyPress" @ChequeDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Cheque" };

Primary.storyName = "cheque_date_text_box";
