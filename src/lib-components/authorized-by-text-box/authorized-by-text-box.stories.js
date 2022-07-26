import AuthorizedByTextBox from "./authorized-by-text-box.vue";
import CustomMDXDocumentation from "./authorized-by-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "AuthorizedByTextBox",
  component: AuthorizedByTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AuthorizedByTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><authorized-by-text-box v-bind="args" @AuthorizedByTextBox-onChange="onChange" @AuthorizedByTextBox-onBlur="onBlur" @AuthorizedByTextBox-onFocus="onFocus" @AuthorizedByTextBox-onKeyPress="onKeyPress" @AuthorizedByTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Authorized" };

Primary.storyName = "authorized_by_text_box";
