
import PaySlipNumberTextBox from './pay-slip-number-text-box.vue';
import CustomMDXDocumentation from './pay-slip-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PaySlipNumberTextBox',
  component:PaySlipNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PaySlipNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><pay-slip-number-text-box v-bind="args" @PaySlipNumberTextBox-onChange="onChange" @PaySlipNumberTextBox-onBlur="onBlur" @PaySlipNumberTextBox-onFocus="onFocus" @PaySlipNumberTextBox-onKeyPress="onKeyPress" @PaySlipNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Pay' };





Primary.storyName = 'pay_slip_number_text_box';

