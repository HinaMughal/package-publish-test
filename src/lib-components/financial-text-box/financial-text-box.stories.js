
import FinancialTextBox from './financial-text-box.vue';
import CustomMDXDocumentation from './financial-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'FinancialTextBox',
  component:FinancialTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FinancialTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><financial-text-box v-bind="args" @FinancialTextBox-onChange="onChange" @FinancialTextBox-onBlur="onBlur" @FinancialTextBox-onFocus="onFocus" @FinancialTextBox-onKeyPress="onKeyPress" @FinancialTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Financial' };





Primary.storyName = 'financial_text_box';

