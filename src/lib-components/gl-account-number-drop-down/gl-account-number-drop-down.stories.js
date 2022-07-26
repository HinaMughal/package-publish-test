
import GlAccountNumberDropDown from './gl-account-number-drop-down.vue';
import CustomMDXDocumentation from './gl-account-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'GlAccountNumberDropDown',
  component:GlAccountNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GlAccountNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><gl-account-number-drop-down v-bind="args" @GLAccountNumberDropDown-onChange="onChange" @GLAccountNumberDropDown-onClick="onClick" @GLAccountNumberDropDown-onBlur="onBlur" @GLAccountNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Gl' , value: [{ option: 'Default-1',value:"1"  }, { option: 'Default-2',value:"2"  }] };





Primary.storyName = 'gl_account_number_drop_down';

