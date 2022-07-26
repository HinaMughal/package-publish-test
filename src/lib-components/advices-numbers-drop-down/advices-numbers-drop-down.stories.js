
import AdvicesNumbersDropDown from './advices-numbers-drop-down.vue';
import CustomMDXDocumentation from './advices-numbers-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AdvicesNumbersDropDown',
  component:AdvicesNumbersDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AdvicesNumbersDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><advices-numbers-drop-down v-bind="args" @AdvicesNumbersDropDown-onChange="onChange" @AdvicesNumbersDropDown-onClick="onClick" @AdvicesNumbersDropDown-onBlur="onBlur" @AdvicesNumbersDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Advices' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'advices_numbers_drop_down';

