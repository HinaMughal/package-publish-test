
import CreditCardTitleTextBox from './credit-card-title-text-box.vue';
import CustomMDXDocumentation from './credit-card-title-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CreditCardTitleTextBox',
  component:CreditCardTitleTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CreditCardTitleTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><credit-card-title-text-box v-bind="args" @CreditCardTitleTextBox-onChange="onChange" @CreditCardTitleTextBox-onBlur="onBlur" @CreditCardTitleTextBox-onFocus="onFocus" @CreditCardTitleTextBox-onKeyPress="onKeyPress" @CreditCardTitleTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Credit' };





Primary.storyName = 'credit_card_title_text_box';

