
import ConfirmationTextBox from './confirmation-text-box.vue';
import CustomMDXDocumentation from './confirmation-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ConfirmationTextBox',
  component:ConfirmationTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ConfirmationTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><confirmation-text-box v-bind="args" @ConfirmationTextBox-onChange="onChange" @ConfirmationTextBox-onBlur="onBlur" @ConfirmationTextBox-onFocus="onFocus" @ConfirmationTextBox-onKeyPress="onKeyPress" @ConfirmationTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Confirmation' };
Primary.storyName = 'confirmation_text_box';

