
import SearchButton from './search-button.vue';
import CustomMDXDocumentation from './search-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SearchButton',
  component:SearchButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SearchButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><search-button v-bind="args" @SearchButton-onClick="onClick" @SearchButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Search' , nativeType:"button" };
Primary.storyName = 'search_button';

