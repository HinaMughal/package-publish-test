
import ReasonCodeDropDown from './reason-code-drop-down.vue';
import CustomMDXDocumentation from './reason-code-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ReasonCodeDropDown',
  component:ReasonCodeDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ReasonCodeDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><reason-code-drop-down v-bind="args" @ReasonCodeDropDown-onChange="onChange" @ReasonCodeDropDown-onClick="onClick" @ReasonCodeDropDown-onBlur="onBlur" @ReasonCodeDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Reason' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'reason_code_drop_down';

