
import PayInSlipDateTextBox from './pay-in-slip-date-text-box.vue';
import CustomMDXDocumentation from './pay-in-slip-date-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PayInSlipDateTextBox',
  component:PayInSlipDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PayInSlipDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><pay-in-slip-date-text-box v-bind="args" @PayInSlipDateTextBox-onChange="onChange" @PayInSlipDateTextBox-onBlur="onBlur" @PayInSlipDateTextBox-onFocus="onFocus" @PayInSlipDateTextBox-onKeyPress="onKeyPress" @PayInSlipDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
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
Primary.storyName = 'pay_in_slip_date_text_box';

