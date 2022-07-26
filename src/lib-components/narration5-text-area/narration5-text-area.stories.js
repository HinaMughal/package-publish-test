
import Narration5TextArea from './narration5-text-area.vue';
import CustomMDXDocumentation from './narration5-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration5TextArea',
  component:Narration5TextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration5TextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration5-text-area v-bind="args" @Narration5TextArea-onChange="onChange" @Narration5TextArea-onBlur="onBlur" @Narration5TextArea-onFocus="onFocus" @Narration5TextArea-onKeyPress="onKeyPress" @Narration5TextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration5' };
Primary.storyName = 'narration5_text_area';

