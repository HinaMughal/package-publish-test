
import RefreshButton from './refresh-button.vue';
import CustomMDXDocumentation from './refresh-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RefreshButton',
  component:RefreshButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RefreshButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><refresh-button v-bind="args" @RefreshButton-onClick="onClick" @RefreshButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Refresh' , nativeType:"button" };
Primary.storyName = 'refresh_button';

