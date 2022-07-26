
import NonFinancialTextBox from './non-financial-text-box.vue';
import CustomMDXDocumentation from './non-financial-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NonFinancialTextBox',
  component:NonFinancialTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NonFinancialTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><non-financial-text-box v-bind="args" @NonFinancialTextBox-onChange="onChange" @NonFinancialTextBox-onBlur="onBlur" @NonFinancialTextBox-onFocus="onFocus" @NonFinancialTextBox-onKeyPress="onKeyPress" @NonFinancialTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Non' };





Primary.storyName = 'non_financial_text_box';

