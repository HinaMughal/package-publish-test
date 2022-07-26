
import AuthorizeButton from './authorize-button.vue';
import CustomMDXDocumentation from './authorize-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AuthorizeButton',
  component:AuthorizeButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AuthorizeButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><authorize-button v-bind="args" @AuthorizeButton-onClick="onClick" @AuthorizeButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Authorize' , nativeType:"button" };
Primary.storyName = 'authorize_button';

