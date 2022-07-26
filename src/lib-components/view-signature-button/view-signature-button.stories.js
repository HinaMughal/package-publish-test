
import ViewSignatureButton from './view-signature-button.vue';
import CustomMDXDocumentation from './view-signature-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ViewSignatureButton',
  component:ViewSignatureButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ViewSignatureButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><view-signature-button v-bind="args" @ViewSignatureButton-onClick="onClick" @ViewSignatureButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'View' , nativeType:"button" };
Primary.storyName = 'view_signature_button';

