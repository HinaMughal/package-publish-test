
import Narration9TextArea from './narration9-text-area.vue';
import CustomMDXDocumentation from './narration9-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Narration9TextArea',
  component:Narration9TextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Narration9TextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><narration9-text-area v-bind="args" @Narration9TextArea-onChange="onChange" @Narration9TextArea-onBlur="onBlur" @Narration9TextArea-onFocus="onFocus" @Narration9TextArea-onKeyPress="onKeyPress" @Narration9TextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Narration9' };
Primary.storyName = 'narration9_text_area';

