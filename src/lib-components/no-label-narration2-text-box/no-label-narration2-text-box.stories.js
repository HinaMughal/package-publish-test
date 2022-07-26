
import NoLabelNarration2TextBox from './no-label-narration2-text-box.vue';
import CustomMDXDocumentation from './no-label-narration2-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NoLabelNarration2TextBox',
  component:NoLabelNarration2TextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NoLabelNarration2TextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><no-label-narration2-text-box v-bind="args" @NoLabelNarration2TextBox-onChange="onChange" @NoLabelNarration2TextBox-onBlur="onBlur" @NoLabelNarration2TextBox-onFocus="onFocus" @NoLabelNarration2TextBox-onKeyPress="onKeyPress" @NoLabelNarration2TextBox-onKeyUp="onKeyUp" /> </el-form>',
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
Primary.storyName = 'no_label_narration2_text_box';

