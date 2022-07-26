
import ContraAccountNumberTextBox from './contra-account-number-text-box.vue';
import CustomMDXDocumentation from './contra-account-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ContraAccountNumberTextBox',
  component:ContraAccountNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ContraAccountNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><contra-account-number-text-box v-bind="args" @ContraAccountNumberTextBox-onChange="onChange" @ContraAccountNumberTextBox-onBlur="onBlur" @ContraAccountNumberTextBox-onFocus="onFocus" @ContraAccountNumberTextBox-onKeyPress="onKeyPress" @ContraAccountNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Contra' };
Primary.args = { value: '0081-564231-15-3'}





Primary.storyName = 'contra_account_number_text_box';

