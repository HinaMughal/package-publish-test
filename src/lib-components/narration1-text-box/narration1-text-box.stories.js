
import Narration1TextBox from './narration1-text-box.vue';
import CustomMDXDocumentation from './narration1-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration1TextBox',
  component:Narration1TextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration1TextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration1-text-box v-bind="args" @Narration1TextBox-onChange="onChange" @Narration1TextBox-onBlur="onBlur" @Narration1TextBox-onFocus="onFocus" @Narration1TextBox-onKeyPress="onKeyPress" @Narration1TextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration1' };





Primary.storyName = 'narration1_text_box';

