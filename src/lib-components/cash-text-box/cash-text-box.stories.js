
import CashTextBox from './cash-text-box.vue';
import CustomMDXDocumentation from './cash-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CashTextBox',
  component:CashTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CashTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><cash-text-box v-bind="args" @CashTextBox-onChange="onChange" @CashTextBox-onBlur="onBlur" @CashTextBox-onFocus="onFocus" @CashTextBox-onKeyPress="onKeyPress" @CashTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Cash' };
Primary.storyName = 'cash_text_box';

