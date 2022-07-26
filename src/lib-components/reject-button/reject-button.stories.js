
import RejectButton from './reject-button.vue';
import CustomMDXDocumentation from './reject-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RejectButton',
  component:RejectButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RejectButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><reject-button v-bind="args" @RejectButton-onClick="onClick" @RejectButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Reject' , nativeType:"button" };
Primary.storyName = 'reject_button';

