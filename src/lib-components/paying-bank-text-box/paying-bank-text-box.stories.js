
import PayingBankTextBox from './paying-bank-text-box.vue';
import CustomMDXDocumentation from './paying-bank-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PayingBankTextBox',
  component:PayingBankTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PayingBankTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><paying-bank-text-box v-bind="args" @PayingBankTextBox-onChange="onChange" @PayingBankTextBox-onBlur="onBlur" @PayingBankTextBox-onFocus="onFocus" @PayingBankTextBox-onKeyPress="onKeyPress" @PayingBankTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Paying' };





Primary.storyName = 'paying_bank_text_box';

