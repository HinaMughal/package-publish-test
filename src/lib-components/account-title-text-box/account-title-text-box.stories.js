
import AccountTitleTextBox from './account-title-text-box.vue';
import CustomMDXDocumentation from './account-title-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AccountTitleTextBox',
  component:AccountTitleTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccountTitleTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><account-title-text-box v-bind="args" @AccountTitleTextBox-onChange="onChange" @AccountTitleTextBox-onBlur="onBlur" @AccountTitleTextBox-onFocus="onFocus" @AccountTitleTextBox-onKeyPress="onKeyPress" @AccountTitleTextBox-onKeyUp="onKeyUp" /> </el-form>',
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

Primary.storyName = 'account_title_text_box';