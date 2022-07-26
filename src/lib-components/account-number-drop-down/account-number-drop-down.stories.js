
import AccountNumberDropDown from './account-number-drop-down.vue';
import CustomMDXDocumentation from './account-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AccountNumberDropDown',
  component:AccountNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccountNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><account-number-drop-down v-bind="args" @AccountNumberDropDown-onChange="onChange" @AccountNumberDropDown-onClick="onClick" @AccountNumberDropDown-onBlur="onBlur" @AccountNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Account' , value: [{ option: 'IBAN-278761987' ,value:"1"  }, { option: 'IBAN-2787619' ,value:"2" }] };





Primary.storyName = 'account_number_drop_down';

