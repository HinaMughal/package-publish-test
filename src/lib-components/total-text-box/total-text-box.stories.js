
import TotalTextBox from './total-text-box.vue';
import CustomMDXDocumentation from './total-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TotalTextBox',
  component:TotalTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TotalTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><total-text-box v-bind="args" @TotalTextBox-onChange="onChange" @TotalTextBox-onBlur="onBlur" @TotalTextBox-onFocus="onFocus" @TotalTextBox-onKeyPress="onKeyPress" @TotalTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Total' };
Primary.storyName = 'total_text_box';

