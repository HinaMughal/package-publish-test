
import CustomerCategoryTextBox from './customer-category-text-box.vue';
import CustomMDXDocumentation from './customer-category-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CustomerCategoryTextBox',
  component:CustomerCategoryTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CustomerCategoryTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><customer-category-text-box v-bind="args" @CustomerCategoryTextBox-onChange="onChange" @CustomerCategoryTextBox-onBlur="onBlur" @CustomerCategoryTextBox-onFocus="onFocus" @CustomerCategoryTextBox-onKeyPress="onKeyPress" @CustomerCategoryTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Customer' };





Primary.storyName = 'customer_category_text_box';

