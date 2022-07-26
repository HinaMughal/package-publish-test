
import NoButton from './no-button.vue';
import CustomMDXDocumentation from './no-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'NoButton',
  component:NoButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NoButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><no-button v-bind="args" @NoButton-onClick="onClick" @NoButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'No' , nativeType:"button" };
Primary.storyName = 'no_button';

