
import PhotographImagePanel from './photograph-image-panel.vue';
import CustomMDXDocumentation from './photograph-image-panel.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PhotographImagePanel',
  component:PhotographImagePanel,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PhotographImagePanel },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><photograph-image-panel v-bind="args" @PhotographImagePanel-onClick="onClick" /> </el-form>',
  methods: {
    onClick: action("onClick"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Photograph'  };
Primary.storyName = 'photograph_image_panel';

