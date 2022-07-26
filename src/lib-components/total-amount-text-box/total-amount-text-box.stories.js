
import TotalAmountTextBox from './total-amount-text-box.vue';
import CustomMDXDocumentation from './total-amount-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TotalAmountTextBox',
  component:TotalAmountTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TotalAmountTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><total-amount-text-box v-bind="args" @TotalAmountTextBox-onChange="onChange" @TotalAmountTextBox-onBlur="onBlur" @TotalAmountTextBox-onFocus="onFocus" @TotalAmountTextBox-onKeyPress="onKeyPress" @TotalAmountTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Total', values:'0.00' };





Primary.storyName = 'total_amount_text_box';

