
import ExitButton from './exit-button.vue';
import CustomMDXDocumentation from './exit-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExitButton',
  component:ExitButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExitButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><exit-button v-bind="args" @ExitButton-onClick="onClick" @ExitButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Exit' , nativeType:"button" };
Primary.storyName = 'exit_button';

