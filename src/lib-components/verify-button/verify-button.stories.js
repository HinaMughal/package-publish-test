
import VerifyButton from './verify-button.vue';
import CustomMDXDocumentation from './verify-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'VerifyButton',
  component:VerifyButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VerifyButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><verify-button v-bind="args" @VerifyButton-onClick="onClick" @VerifyButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Verify' , nativeType:"button" };
Primary.storyName = 'verify_button';

