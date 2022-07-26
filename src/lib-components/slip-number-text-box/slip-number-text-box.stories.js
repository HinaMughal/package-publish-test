
import SlipNumberTextBox from './slip-number-text-box.vue';
import CustomMDXDocumentation from './slip-number-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SlipNumberTextBox',
  component:SlipNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SlipNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><slip-number-text-box v-bind="args" @SlipNumberTextBox-onChange="onChange" @SlipNumberTextBox-onBlur="onBlur" @SlipNumberTextBox-onFocus="onFocus" @SlipNumberTextBox-onKeyPress="onKeyPress" @SlipNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Slip' };





Primary.storyName = 'slip_number_text_box';

