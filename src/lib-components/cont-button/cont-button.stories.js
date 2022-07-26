
import ContButton from './cont-button.vue';
import CustomMDXDocumentation from './cont-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ContButton',
  component:ContButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ContButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><cont-button v-bind="args" @ContButton-onClick="onClick" @ContButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Cont' , nativeType:"button" };
Primary.storyName = 'cont_button';

