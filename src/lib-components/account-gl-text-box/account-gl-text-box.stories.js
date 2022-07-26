
import AccountGLTextBox from './account-gl-text-box.vue';
import CustomMDXDocumentation from './account-gl-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AccountGLTextBox',
  component:AccountGLTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccountGLTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><account-gl-text-box v-bind="args" @AccountGLTextBox-onChange="onChange" @AccountGLTextBox-onBlur="onBlur" @AccountGLTextBox-onFocus="onFocus" @AccountGLTextBox-onKeyPress="onKeyPress" @AccountGLTextBox-onKeyUp="onKeyUp" /> </el-form>',
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
Primary.storyName = 'account_gl_text_box';

