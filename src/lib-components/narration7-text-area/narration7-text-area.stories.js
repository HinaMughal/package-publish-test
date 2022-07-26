
import Narration7TextArea from './narration7-text-area.vue';
import CustomMDXDocumentation from './narration7-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration7TextArea',
  component:Narration7TextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration7TextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration7-text-area v-bind="args" @Narration7TextArea-onChange="onChange" @Narration7TextArea-onBlur="onBlur" @Narration7TextArea-onFocus="onFocus" @Narration7TextArea-onKeyPress="onKeyPress" @Narration7TextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration7' };
Primary.storyName = 'narration7_text_area';

