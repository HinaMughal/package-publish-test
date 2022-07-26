
import PostDateToTextBox from './post-date-to-text-box.vue';
import CustomMDXDocumentation from './post-date-to-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PostDateToTextBox',
  component:PostDateToTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PostDateToTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><post-date-to-text-box v-bind="args" @PostDateToTextBox-onChange="onChange" @PostDateToTextBox-onBlur="onBlur" @PostDateToTextBox-onFocus="onFocus" @PostDateToTextBox-onKeyPress="onKeyPress" @PostDateToTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Post' };
Primary.storyName = 'post_date_to_text_box';

