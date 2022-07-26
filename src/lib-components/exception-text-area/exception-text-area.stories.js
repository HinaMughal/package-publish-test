
import ExceptionTextArea from './exception-text-area.vue';
import CustomMDXDocumentation from './exception-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExceptionTextArea',
  component:ExceptionTextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExceptionTextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><exception-text-area v-bind="args" @ExceptionTextArea-onChange="onChange" @ExceptionTextArea-onBlur="onBlur" @ExceptionTextArea-onFocus="onFocus" @ExceptionTextArea-onKeyPress="onKeyPress" @ExceptionTextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Exception' };
Primary.storyName = 'exception_text_area';

