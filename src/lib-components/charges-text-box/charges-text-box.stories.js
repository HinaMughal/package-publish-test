import ChargesTextBox from "./charges-text-box.vue";
import CustomMDXDocumentation from "./charges-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "ChargesTextBox",
  component: ChargesTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ChargesTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><charges-text-box v-bind="args" @ChargesTextBox-onChange="onChange" @ChargesTextBox-onBlur="onBlur" @ChargesTextBox-onFocus="onFocus" @ChargesTextBox-onKeyPress="onKeyPress" @ChargesTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Charges" };

Primary.storyName = "charges_text_box";
