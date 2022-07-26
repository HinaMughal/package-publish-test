import TransactionDescriptionTextBox from "./transaction-description-text-box.vue";
import CustomMDXDocumentation from "./transaction-description-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "TransactionDescriptionTextBox",
  component: TransactionDescriptionTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionDescriptionTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><transaction-description-text-box v-bind="args" @TransactionDescriptionTextBox-onChange="onChange" @TransactionDescriptionTextBox-onBlur="onBlur" @TransactionDescriptionTextBox-onFocus="onFocus" @TransactionDescriptionTextBox-onKeyPress="onKeyPress" @TransactionDescriptionTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Transaction" };

Primary.storyName = "transaction_description_text_box";
