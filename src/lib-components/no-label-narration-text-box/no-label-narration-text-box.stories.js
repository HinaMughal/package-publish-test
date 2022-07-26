
import NoLabelNarrationTextBox from './no-label-narration-text-box.vue';
import CustomMDXDocumentation from './no-label-narration-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NoLabelNarrationTextBox',
  component:NoLabelNarrationTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NoLabelNarrationTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><no-label-narration-text-box v-bind="args" @NoLabelNarrationTextBox-onChange="onChange" @NoLabelNarrationTextBox-onBlur="onBlur" @NoLabelNarrationTextBox-onFocus="onFocus" @NoLabelNarrationTextBox-onKeyPress="onKeyPress" @NoLabelNarrationTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'No' };
Primary.storyName = 'no_label_narration_text_box';

