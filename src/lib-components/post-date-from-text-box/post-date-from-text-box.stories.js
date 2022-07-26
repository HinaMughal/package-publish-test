
import PostDateFromTextBox from './post-date-from-text-box.vue';
import CustomMDXDocumentation from './post-date-from-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'PostDateFromTextBox',
  component:PostDateFromTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PostDateFromTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><post-date-from-text-box v-bind="args" @PostDateFromTextBox-onChange="onChange" @PostDateFromTextBox-onBlur="onBlur" @PostDateFromTextBox-onFocus="onFocus" @PostDateFromTextBox-onKeyPress="onKeyPress" @PostDateFromTextBox-onKeyUp="onKeyUp" /> </el-form>',
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
Primary.storyName = 'post_date_from_text_box';

