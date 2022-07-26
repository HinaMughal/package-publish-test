
import SignatureImagePanel from './signature-image-panel.vue';
import CustomMDXDocumentation from './signature-image-panel.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SignatureImagePanel',
  component:SignatureImagePanel,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SignatureImagePanel },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><signature-image-panel v-bind="args" @SignatureImagePanel-onClick="onClick" /> </el-form>',
  methods: {
    onClick: action("onClick"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Signature'  };
Primary.storyName = 'signature_image_panel';

