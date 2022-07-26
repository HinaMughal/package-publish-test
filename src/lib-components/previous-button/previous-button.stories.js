
import PreviousButton from './previous-button.vue';
import CustomMDXDocumentation from './previous-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PreviousButton',
  component:PreviousButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PreviousButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><previous-button v-bind="args" @PreviousButton-onClick="onClick" @PreviousButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Previous' , nativeType:"button" };
Primary.storyName = 'previous_button';

