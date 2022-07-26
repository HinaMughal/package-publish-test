
import ZoomInOutButton from './zoom-in-out-button.vue';
import CustomMDXDocumentation from './zoom-in-out-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ZoomInOutButton',
  component:ZoomInOutButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZoomInOutButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><zoom-in-out-button v-bind="args" @ZoomInOutButton-onClick="onClick" @ZoomInOutButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Zoom' , nativeType:"button" };
Primary.storyName = 'zoom_in_out_button';

