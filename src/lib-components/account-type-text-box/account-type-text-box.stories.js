
import AccountTypeTextBox from './account-type-text-box.vue';
import CustomMDXDocumentation from './account-type-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AccountTypeTextBox',
  component:AccountTypeTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccountTypeTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><account-type-text-box v-bind="args" @AccountTypeTextBox-onChange="onChange" @AccountTypeTextBox-onBlur="onBlur" @AccountTypeTextBox-onFocus="onFocus" @AccountTypeTextBox-onKeyPress="onKeyPress" @AccountTypeTextBox-onKeyUp="onKeyUp" /> </el-form>',
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
Primary.storyName = 'account_type_text_box';

