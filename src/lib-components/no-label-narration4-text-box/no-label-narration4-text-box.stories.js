
import NoLabelNarration4TextBox from './no-label-narration4-text-box.vue';
import CustomMDXDocumentation from './no-label-narration4-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NoLabelNarration4TextBox',
  component:NoLabelNarration4TextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NoLabelNarration4TextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><no-label-narration4-text-box v-bind="args" @NoLabelNarration4TextBox-onChange="onChange" @NoLabelNarration4TextBox-onBlur="onBlur" @NoLabelNarration4TextBox-onFocus="onFocus" @NoLabelNarration4TextBox-onKeyPress="onKeyPress" @NoLabelNarration4TextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'No' ,values:'Vo:194093/2022'};





Primary.storyName = 'no_label_narration4_text_box';

