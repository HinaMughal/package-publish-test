
import AccountNumberTextBox from './account-number-text-box.vue';
import CustomMDXDocumentation from './account-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AccountNumberTextBox',
  component:AccountNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccountNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><account-number-text-box v-bind="args" @AccountNumberTextBox-onChange="onChange" @AccountNumberTextBox-onBlur="onBlur" @AccountNumberTextBox-onFocus="onFocus" @AccountNumberTextBox-onKeyPress="onKeyPress" @AccountNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Account' };





Primary.storyName = 'account_number_text_box';

