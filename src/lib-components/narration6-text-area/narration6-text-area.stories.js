
import Narration6TextArea from './narration6-text-area.vue';
import CustomMDXDocumentation from './narration6-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration6TextArea',
  component:Narration6TextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration6TextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration6-text-area v-bind="args" @Narration6TextArea-onChange="onChange" @Narration6TextArea-onBlur="onBlur" @Narration6TextArea-onFocus="onFocus" @Narration6TextArea-onKeyPress="onKeyPress" @Narration6TextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration6' };
Primary.storyName = 'narration6_text_area';

