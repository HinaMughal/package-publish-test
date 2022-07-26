
import ReferenceNumberDropDown from './reference-number-drop-down.vue';
import CustomMDXDocumentation from './reference-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ReferenceNumberDropDown',
  component:ReferenceNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ReferenceNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><reference-number-drop-down v-bind="args" @ReferenceNumberDropDown-onChange="onChange" @ReferenceNumberDropDown-onClick="onClick" @ReferenceNumberDropDown-onBlur="onBlur" @ReferenceNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Reference Nos' , value: [{
  value: "123654",
  option: "123654",
},
{
  value: "789654",
  option: "789654",
}] };





Primary.storyName = 'reference_number_drop_down';

