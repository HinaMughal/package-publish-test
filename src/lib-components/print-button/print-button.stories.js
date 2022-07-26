
import PrintButton from './print-button.vue';
import CustomMDXDocumentation from './print-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PrintButton',
  component:PrintButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PrintButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><print-button v-bind="args" @PrintButton-onClick="onClick" @PrintButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Print' , nativeType:"button" };
Primary.storyName = 'print_button';

