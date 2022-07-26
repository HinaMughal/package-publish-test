
import RefNumberTextBox from './ref-number-text-box.vue';
import CustomMDXDocumentation from './ref-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RefNumberTextBox',
  component:RefNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RefNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><ref-number-text-box v-bind="args" @RefNumberTextBox-onChange="onChange" @RefNumberTextBox-onBlur="onBlur" @RefNumberTextBox-onFocus="onFocus" @RefNumberTextBox-onKeyPress="onKeyPress" @RefNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Ref' };





Primary.storyName = 'ref_number_text_box';

