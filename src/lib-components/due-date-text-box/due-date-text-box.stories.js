
import DueDateTextBox from './due-date-text-box.vue';
import CustomMDXDocumentation from './due-date-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'DueDateTextBox',
  component:DueDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DueDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><due-date-text-box v-bind="args" @DueDateTextBox-onChange="onChange" @DueDateTextBox-onBlur="onBlur" @DueDateTextBox-onFocus="onFocus" @DueDateTextBox-onKeyPress="onKeyPress" @DueDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Due' };





Primary.storyName = 'due_date_text_box';

