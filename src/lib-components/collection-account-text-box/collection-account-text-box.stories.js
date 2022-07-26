
import CollectionAccountTextBox from './collection-account-text-box.vue';
import CustomMDXDocumentation from './collection-account-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CollectionAccountTextBox',
  component:CollectionAccountTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CollectionAccountTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><collection-account-text-box v-bind="args" @CollectionAccountTextBox-onChange="onChange" @CollectionAccountTextBox-onBlur="onBlur" @CollectionAccountTextBox-onFocus="onFocus" @CollectionAccountTextBox-onKeyPress="onKeyPress" @CollectionAccountTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Collection' };

Primary.storyName = 'collection_account_text_box';