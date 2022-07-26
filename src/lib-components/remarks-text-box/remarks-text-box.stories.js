
import RemarksTextBox from './remarks-text-box.vue';
import CustomMDXDocumentation from './remarks-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RemarksTextBox',
  component:RemarksTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RemarksTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><remarks-text-box v-bind="args" @RemarksTextBox-onChange="onChange" @RemarksTextBox-onBlur="onBlur" @RemarksTextBox-onFocus="onFocus" @RemarksTextBox-onKeyPress="onKeyPress" @RemarksTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Remarks' };





Primary.storyName = 'remarks_text_box';

