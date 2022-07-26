
import DrMoTextBox from './dr-mo-text-box.vue';
import CustomMDXDocumentation from './dr-mo-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'DrMoTextBox',
  component:DrMoTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DrMoTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><dr-mo-text-box v-bind="args" @DrMoTextBox-onChange="onChange" @DrMoTextBox-onBlur="onBlur" @DrMoTextBox-onFocus="onFocus" @DrMoTextBox-onKeyPress="onKeyPress" @DrMoTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Dr' };





Primary.storyName = 'dr_mo_text_box';

