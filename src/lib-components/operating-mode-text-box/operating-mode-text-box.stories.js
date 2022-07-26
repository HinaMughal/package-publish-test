
import OperatingModeTextBox from './operating-mode-text-box.vue';
import CustomMDXDocumentation from './operating-mode-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OperatingModeTextBox',
  component:OperatingModeTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OperatingModeTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><operating-mode-text-box v-bind="args" @OperatingModeTextBox-onChange="onChange" @OperatingModeTextBox-onBlur="onBlur" @OperatingModeTextBox-onFocus="onFocus" @OperatingModeTextBox-onKeyPress="onKeyPress" @OperatingModeTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Operating' };





Primary.storyName = 'operating_mode_text_box';

