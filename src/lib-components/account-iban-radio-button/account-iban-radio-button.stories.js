
import AccountIbanRadioButton from './account-iban-radio-button.vue';
import CustomMDXDocumentation from './account-iban-radio-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AccountIbanRadioButton',
  component:AccountIbanRadioButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AccountIbanRadioButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><account-iban-radio-button v-bind="args" @AccountIbanRadioButton-onChange="onChange" @AccountIbanRadioButton-onClick="onClick" @AccountIbanRadioButton-onBlur="onBlur" @AccountIbanRadioButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
 
 
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Account'  };
Primary.storyName = 'account_iban_radio_button';

