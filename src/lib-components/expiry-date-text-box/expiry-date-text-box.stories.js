
import ExpiryDateTextBox from './expiry-date-text-box.vue';
import CustomMDXDocumentation from './expiry-date-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExpiryDateTextBox',
  component:ExpiryDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExpiryDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><expiry-date-text-box v-bind="args" @ExpiryDateTextBox-onChange="onChange" @ExpiryDateTextBox-onBlur="onBlur" @ExpiryDateTextBox-onFocus="onFocus" @ExpiryDateTextBox-onKeyPress="onKeyPress" @ExpiryDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Expiry' };
Primary.storyName = 'expiry_date_text_box';

