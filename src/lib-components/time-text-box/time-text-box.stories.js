
import TimeTextBox from './time-text-box.vue';
import CustomMDXDocumentation from './time-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'TimeTextBox',
  component:TimeTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TimeTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><time-text-box v-bind="args" @TimeTextBox-onChange="onChange" @TimeTextBox-onBlur="onBlur" @TimeTextBox-onFocus="onFocus" @TimeTextBox-onKeyPress="onKeyPress" @TimeTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Time' };





Primary.storyName = 'time_text_box';

