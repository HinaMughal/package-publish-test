
import OkButton from './ok-button.vue';
import CustomMDXDocumentation from './ok-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OkButton',
  component:OkButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OkButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><ok-button v-bind="args" @OkButton-onClick="onClick" @OkButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Ok' , nativeType:"button" };
Primary.storyName = 'ok_button';

