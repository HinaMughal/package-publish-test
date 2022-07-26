
import Narration10TextArea from './narration10-text-area.vue';
import CustomMDXDocumentation from './narration10-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration10TextArea',
  component:Narration10TextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration10TextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration10-text-area v-bind="args" @Narration10TextArea-onChange="onChange" @Narration10TextArea-onBlur="onBlur" @Narration10TextArea-onFocus="onFocus" @Narration10TextArea-onKeyPress="onKeyPress" @Narration10TextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration10' };
Primary.storyName = 'narration10_text_area';

