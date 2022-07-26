
import NarrationTextBox from './narration-text-box.vue';
import CustomMDXDocumentation from './narration-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NarrationTextBox',
  component:NarrationTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NarrationTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration-text-box v-bind="args" @NarrationTextBox-onChange="onChange" @NarrationTextBox-onBlur="onBlur" @NarrationTextBox-onFocus="onFocus" @NarrationTextBox-onKeyPress="onKeyPress" @NarrationTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration' };





Primary.storyName = 'narration_text_box';

