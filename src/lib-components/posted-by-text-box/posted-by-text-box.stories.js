
import PostedByTextBox from './posted-by-text-box.vue';
import CustomMDXDocumentation from './posted-by-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PostedByTextBox',
  component:PostedByTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PostedByTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><posted-by-text-box v-bind="args" @PostedByTextBox-onChange="onChange" @PostedByTextBox-onBlur="onBlur" @PostedByTextBox-onFocus="onFocus" @PostedByTextBox-onKeyPress="onKeyPress" @PostedByTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Posted' };
Primary.storyName = 'posted_by_text_box';

