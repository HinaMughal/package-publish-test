
import PasswordTextBox from './password-text-box.vue';
import CustomMDXDocumentation from './password-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PasswordTextBox',
  component:PasswordTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PasswordTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><password-text-box v-bind="args" @PasswordTextBox-onChange="onChange" @PasswordTextBox-onBlur="onBlur" @PasswordTextBox-onFocus="onFocus" @PasswordTextBox-onKeyPress="onKeyPress" @PasswordTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Password' };
Primary.storyName = 'password_text_box';

