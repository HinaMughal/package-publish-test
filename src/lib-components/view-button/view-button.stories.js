
import ViewButton from './view-button.vue';
import CustomMDXDocumentation from './view-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ViewButton',
  component:ViewButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ViewButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><view-button v-bind="args" @ViewButton-onClick="onClick" @ViewButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'View' , nativeType:"button" };
Primary.storyName = 'view_button';

