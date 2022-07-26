import TransactionStatusTextBox from "./transaction-status-text-box.vue";
import CustomMDXDocumentation from "./transaction-status-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "TransactionStatusTextBox",
  component: TransactionStatusTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransactionStatusTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><transaction-status-text-box v-bind="args" @TransactionStatusTextBox-onChange="onChange" @TransactionStatusTextBox-onBlur="onBlur" @TransactionStatusTextBox-onFocus="onFocus" @TransactionStatusTextBox-onKeyPress="onKeyPress" @TransactionStatusTextBox-onKeyUp="onKeyUp" /> </el-form>',
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

Primary.storyName = "transaction_status_text_box";
