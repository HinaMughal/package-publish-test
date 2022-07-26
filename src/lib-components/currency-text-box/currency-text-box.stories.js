import CurrencyTextBox from "./currency-text-box.vue";
import CustomMDXDocumentation from "./currency-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "CurrencyTextBox",
  component: CurrencyTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CurrencyTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><currency-text-box v-bind="args" @CurrencyTextBox-onChange="onChange" @CurrencyTextBox-onBlur="onBlur" @CurrencyTextBox-onFocus="onFocus" @CurrencyTextBox-onKeyPress="onKeyPress" @CurrencyTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Currency" };
Primary.storyName = "currency_text_box";
