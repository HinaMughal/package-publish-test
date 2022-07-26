
import ReferenceNumberTextBox from './reference-number-text-box.vue';
import CustomMDXDocumentation from './reference-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ReferenceNumberTextBox',
  component:ReferenceNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ReferenceNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><reference-number-text-box v-bind="args" @ReferenceNumberTextBox-onChange="onChange" @ReferenceNumberTextBox-onBlur="onBlur" @ReferenceNumberTextBox-onFocus="onFocus" @ReferenceNumberTextBox-onKeyPress="onKeyPress" @ReferenceNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Reference' };





Primary.storyName = 'reference_number_text_box';

