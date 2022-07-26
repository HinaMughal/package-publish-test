
import Narration8TextArea from './narration8-text-area.vue';
import CustomMDXDocumentation from './narration8-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration8TextArea',
  component:Narration8TextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration8TextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration8-text-area v-bind="args" @Narration8TextArea-onChange="onChange" @Narration8TextArea-onBlur="onBlur" @Narration8TextArea-onFocus="onFocus" @Narration8TextArea-onKeyPress="onKeyPress" @Narration8TextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration8' };
Primary.storyName = 'narration8_text_area';

