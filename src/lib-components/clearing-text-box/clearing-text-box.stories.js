
import ClearingTextBox from './clearing-text-box.vue';
import CustomMDXDocumentation from './clearing-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ClearingTextBox',
  component:ClearingTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ClearingTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><clearing-text-box v-bind="args" @ClearingTextBox-onChange="onChange" @ClearingTextBox-onBlur="onBlur" @ClearingTextBox-onFocus="onFocus" @ClearingTextBox-onKeyPress="onKeyPress" @ClearingTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Clearing' };
Primary.storyName = 'clearing_text_box';

