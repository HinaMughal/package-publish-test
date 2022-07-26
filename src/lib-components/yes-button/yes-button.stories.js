
import YesButton from './yes-button.vue';
import CustomMDXDocumentation from './yes-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'YesButton',
  component:YesButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { YesButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><yes-button v-bind="args" @YesButton-onClick="onClick" @YesButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Yes' , nativeType:"button" };
Primary.storyName = 'yes_button';

