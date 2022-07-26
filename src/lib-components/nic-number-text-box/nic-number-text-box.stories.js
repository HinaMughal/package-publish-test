
import NicNumberTextBox from './nic-number-text-box.vue';
import CustomMDXDocumentation from './nic-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NicNumberTextBox',
  component:NicNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NicNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><nic-number-text-box v-bind="args" @NicNumberTextBox-onChange="onChange" @NicNumberTextBox-onBlur="onBlur" @NicNumberTextBox-onFocus="onFocus" @NicNumberTextBox-onKeyPress="onKeyPress" @NicNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Nic' };





Primary.storyName = 'nic_number_text_box';

