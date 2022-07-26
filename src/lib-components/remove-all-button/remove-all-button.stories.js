
import RemoveAllButton from './remove-all-button.vue';
import CustomMDXDocumentation from './remove-all-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RemoveAllButton',
  component:RemoveAllButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RemoveAllButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><remove-all-button v-bind="args" @RemoveAllButton-onClick="onClick" @RemoveAllButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Remove' , nativeType:"button" };
Primary.storyName = 'remove_all_button';

