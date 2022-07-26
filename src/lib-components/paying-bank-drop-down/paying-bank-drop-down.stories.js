
import PayingBankDropDown from './paying-bank-drop-down.vue';
import CustomMDXDocumentation from './paying-bank-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PayingBankDropDown',
  component:PayingBankDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PayingBankDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><paying-bank-drop-down v-bind="args" @PayingBankDropDown-onChange="onChange" @PayingBankDropDown-onClick="onClick" @PayingBankDropDown-onBlur="onBlur" @PayingBankDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Paying Bank' , value: [{
  value: "1",
  option: "Karachi",
},
{
  value: "2",
  option: "Hongkong",
}] };





Primary.storyName = 'paying_bank_drop_down';

