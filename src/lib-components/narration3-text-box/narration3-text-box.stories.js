
import Narration3TextBox from './narration3-text-box.vue';
import CustomMDXDocumentation from './narration3-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration3TextBox',
  component:Narration3TextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration3TextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration3-text-box v-bind="args" @Narration3TextBox-onChange="onChange" @Narration3TextBox-onBlur="onBlur" @Narration3TextBox-onFocus="onFocus" @Narration3TextBox-onKeyPress="onKeyPress" @Narration3TextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration3' };





Primary.storyName = 'narration3_text_box';

