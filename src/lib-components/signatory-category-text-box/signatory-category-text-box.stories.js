
import SignatoryCategoryTextBox from './signatory-category-text-box.vue';
import CustomMDXDocumentation from './signatory-category-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SignatoryCategoryTextBox',
  component:SignatoryCategoryTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SignatoryCategoryTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><signatory-category-text-box v-bind="args" @SignatoryCategoryTextBox-onChange="onChange" @SignatoryCategoryTextBox-onBlur="onBlur" @SignatoryCategoryTextBox-onFocus="onFocus" @SignatoryCategoryTextBox-onKeyPress="onKeyPress" @SignatoryCategoryTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Signatory', values: '' };





Primary.storyName = 'signatory_category_text_box';

