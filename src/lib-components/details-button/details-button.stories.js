
import DetailsButton from './details-button.vue';
import CustomMDXDocumentation from './details-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'DetailsButton',
  component:DetailsButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DetailsButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><details-button v-bind="args" @DetailsButton-onClick="onClick" @DetailsButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Details' , nativeType:"button" };
Primary.storyName = 'details_button';

