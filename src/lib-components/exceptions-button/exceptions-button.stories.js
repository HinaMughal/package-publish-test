
import ExceptionsButton from './exceptions-button.vue';
import CustomMDXDocumentation from './exceptions-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExceptionsButton',
  component:ExceptionsButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExceptionsButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><exceptions-button v-bind="args" @ExceptionsButton-onClick="onClick" @ExceptionsButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Exceptions' , nativeType:"button" };
Primary.storyName = 'exceptions_button';

