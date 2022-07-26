
import CentralAccountDropDown from './central-account-drop-down.vue';
import CustomMDXDocumentation from './central-account-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CentralAccountDropDown',
  component:CentralAccountDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CentralAccountDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><central-account-drop-down v-bind="args" @CentralAccountDropDown-onChange="onChange" @CentralAccountDropDown-onClick="onClick" @CentralAccountDropDown-onBlur="onBlur" @CentralAccountDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Central' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2' ,value:"2" }] };

Primary.storyName = 'central_account_drop_down';

