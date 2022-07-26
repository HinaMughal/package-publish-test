
import ChequeNumberTextBox from './cheque-number-text-box.vue';
import CustomMDXDocumentation from './cheque-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ChequeNumberTextBox',
  component:ChequeNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ChequeNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><cheque-number-text-box v-bind="args" @ChequeNumberTextBox-onChange="onChange" @ChequeNumberTextBox-onBlur="onBlur" @ChequeNumberTextBox-onFocus="onFocus" @ChequeNumberTextBox-onKeyPress="onKeyPress" @ChequeNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Cheque' };





Primary.storyName = 'cheque_number_text_box';

