
import OperatingInformationTextBox from './operating-information-text-box.vue';
import CustomMDXDocumentation from './operating-information-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OperatingInformationTextBox',
  component:OperatingInformationTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OperatingInformationTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><operating-information-text-box v-bind="args" @OperatingInformationTextBox-onChange="onChange" @OperatingInformationTextBox-onBlur="onBlur" @OperatingInformationTextBox-onFocus="onFocus" @OperatingInformationTextBox-onKeyPress="onKeyPress" @OperatingInformationTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Operating' };





Primary.storyName = 'operating_information_text_box';

