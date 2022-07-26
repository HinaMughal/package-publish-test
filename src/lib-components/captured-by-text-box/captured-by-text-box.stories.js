
import CapturedByTextBox from './captured-by-text-box.vue';
import CustomMDXDocumentation from './captured-by-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CapturedByTextBox',
  component:CapturedByTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CapturedByTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><captured-by-text-box v-bind="args" @CapturedByTextBox-onChange="onChange" @CapturedByTextBox-onBlur="onBlur" @CapturedByTextBox-onFocus="onFocus" @CapturedByTextBox-onKeyPress="onKeyPress" @CapturedByTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Captured' };





Primary.storyName = 'captured_by_text_box';

