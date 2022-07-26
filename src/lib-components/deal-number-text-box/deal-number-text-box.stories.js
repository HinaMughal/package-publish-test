
import DealNumberTextBox from './deal-number-text-box.vue';
import CustomMDXDocumentation from './deal-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'DealNumberTextBox',
  component:DealNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DealNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><deal-number-text-box v-bind="args" @DealNumberTextBox-onChange="onChange" @DealNumberTextBox-onBlur="onBlur" @DealNumberTextBox-onFocus="onFocus" @DealNumberTextBox-onKeyPress="onKeyPress" @DealNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Deal' };





Primary.storyName = 'deal_number_text_box';

