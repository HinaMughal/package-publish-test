
import LimitTextBox from './limit-text-box.vue';
import CustomMDXDocumentation from './limit-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'LimitTextBox',
  component:LimitTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LimitTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><limit-text-box v-bind="args" @LimitTextBox-onChange="onChange" @LimitTextBox-onBlur="onBlur" @LimitTextBox-onFocus="onFocus" @LimitTextBox-onKeyPress="onKeyPress" @LimitTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Limit' };





Primary.storyName = 'limit_text_box';

