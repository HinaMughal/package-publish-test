
import NextButton from './next-button.vue';
import CustomMDXDocumentation from './next-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NextButton',
  component:NextButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NextButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><next-button v-bind="args" @NextButton-onClick="onClick" @NextButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Next' , nativeType:"button" };
Primary.storyName = 'next_button';

