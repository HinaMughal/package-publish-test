
import OutwardReferenceNumberDropDown from './outward-reference-number-drop-down.vue';
import CustomMDXDocumentation from './outward-reference-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OutwardReferenceNumberDropDown',
  component:OutwardReferenceNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OutwardReferenceNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><outward-reference-number-drop-down v-bind="args" @OutwardReferenceNumberDropDown-onChange="onChange" @OutwardReferenceNumberDropDown-onClick="onClick" @OutwardReferenceNumberDropDown-onBlur="onBlur" @OutwardReferenceNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Outward Ref No' , value: [{
  value: "741258",
  option: "741258",
},
{
  value: "963258",
  option: "963258",
}] };





Primary.storyName = 'outward_reference_number_drop_down';

