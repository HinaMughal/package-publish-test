
import BackButton from './back-button.vue';
import CustomMDXDocumentation from './back-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'BackButton',
  component:BackButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BackButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><back-button v-bind="args" @BackButton-onClick="onClick" @BackButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Back' , nativeType:"button" };
Primary.storyName = 'back_button';

