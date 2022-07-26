
import CardNumberTextBox from './card-number-text-box.vue';
import CustomMDXDocumentation from './card-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CardNumberTextBox',
  component:CardNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CardNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><card-number-text-box v-bind="args" @CardNumberTextBox-onChange="onChange" @CardNumberTextBox-onBlur="onBlur" @CardNumberTextBox-onFocus="onFocus" @CardNumberTextBox-onKeyPress="onKeyPress" @CardNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Card' };





Primary.storyName = 'card_number_text_box';

