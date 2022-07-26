
import TransferTextBox from './transfer-text-box.vue';
import CustomMDXDocumentation from './transfer-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TransferTextBox',
  component:TransferTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TransferTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><transfer-text-box v-bind="args" @TransferTextBox-onChange="onChange" @TransferTextBox-onBlur="onBlur" @TransferTextBox-onFocus="onFocus" @TransferTextBox-onKeyPress="onKeyPress" @TransferTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Transfer' };
Primary.storyName = 'transfer_text_box';

