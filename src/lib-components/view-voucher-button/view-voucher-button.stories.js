
import ViewVoucherButton from './view-voucher-button.vue';
import CustomMDXDocumentation from './view-voucher-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ViewVoucherButton',
  component:ViewVoucherButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ViewVoucherButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><view-voucher-button v-bind="args" @ViewVoucherButton-onClick="onClick" @ViewVoucherButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'View' , nativeType:"button" };
Primary.storyName = 'view_voucher_button';

