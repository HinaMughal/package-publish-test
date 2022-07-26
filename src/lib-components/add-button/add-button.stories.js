
import AddButton from './add-button.vue';
import CustomMDXDocumentation from './add-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'AddButton',
  component:AddButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AddButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><add-button v-bind="args" @AddButton-onClick="onClick" @AddButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Add' , nativeType:"button" };
Primary.storyName = 'add_button';

