
import CCYDetailsButton from './ccy-details-button.vue';
import CustomMDXDocumentation from './ccy-details-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CCYDetailsButton',
  component:CCYDetailsButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CCYDetailsButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><ccy-details-button v-bind="args" @CCYDetailsButton-onClick="onClick" @CCYDetailsButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Ccy' , nativeType:"button" };
Primary.storyName = 'ccy_details_button';

