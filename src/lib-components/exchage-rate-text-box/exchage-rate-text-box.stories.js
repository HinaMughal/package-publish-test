
import ExchageRateTextBox from './exchage-rate-text-box.vue';
import CustomMDXDocumentation from './exchage-rate-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExchageRateTextBox',
  component:ExchageRateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExchageRateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><exchage-rate-text-box v-bind="args" @ExchageRateTextBox-onChange="onChange" @ExchageRateTextBox-onBlur="onBlur" @ExchageRateTextBox-onFocus="onFocus" @ExchageRateTextBox-onKeyPress="onKeyPress" @ExchageRateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Exchage' };
Primary.args = { value : '1.00000' }





Primary.storyName = 'exchage_rate_text_box';

