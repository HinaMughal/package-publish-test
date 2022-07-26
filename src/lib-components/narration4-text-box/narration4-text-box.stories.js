
import Narration4TextBox from './narration4-text-box.vue';
import CustomMDXDocumentation from './narration4-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration4TextBox',
  component:Narration4TextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration4TextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration4-text-box v-bind="args" @Narration4TextBox-onChange="onChange" @Narration4TextBox-onBlur="onBlur" @Narration4TextBox-onFocus="onFocus" @Narration4TextBox-onKeyPress="onKeyPress" @Narration4TextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration4' };





Primary.storyName = 'narration4_text_box';

