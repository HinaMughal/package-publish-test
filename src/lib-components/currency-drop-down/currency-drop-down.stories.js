
import CurrencyDropDown from './currency-drop-down.vue';
import CustomMDXDocumentation from './currency-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CurrencyDropDown',
  component:CurrencyDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CurrencyDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><currency-drop-down v-bind="args" @CurrencyDropDown-onChange="onChange" @CurrencyDropDown-onClick="onClick" @CurrencyDropDown-onBlur="onBlur" @CurrencyDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Currency' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'currency_drop_down';

