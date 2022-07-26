
import ProcessButton from './process-button.vue';
import CustomMDXDocumentation from './process-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ProcessButton',
  component:ProcessButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ProcessButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><process-button v-bind="args" @ProcessButton-onClick="onClick" @ProcessButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Process' , nativeType:"button" };
Primary.storyName = 'process_button';

