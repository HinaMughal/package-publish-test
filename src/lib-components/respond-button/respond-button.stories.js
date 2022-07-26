
import RespondButton from './respond-button.vue';
import CustomMDXDocumentation from './respond-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RespondButton',
  component:RespondButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RespondButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><respond-button v-bind="args" @RespondButton-onClick="onClick" @RespondButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Respond' , nativeType:"button" };
Primary.storyName = 'respond_button';

