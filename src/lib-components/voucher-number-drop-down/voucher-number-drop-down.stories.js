
import VoucherNumberDropDown from './voucher-number-drop-down.vue';
import CustomMDXDocumentation from './voucher-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'VoucherNumberDropDown',
  component:VoucherNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VoucherNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><voucher-number-drop-down v-bind="args" @VoucherNumberDropDown-onChange="onChange" @VoucherNumberDropDown-onClick="onClick" @VoucherNumberDropDown-onBlur="onBlur" @VoucherNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Voucher' , value:  [{
  value: "123654",
  option: "123654",
},
{
  value: "789654",
  option: "789654",
}]  };





Primary.storyName = 'voucher_number_drop_down';

