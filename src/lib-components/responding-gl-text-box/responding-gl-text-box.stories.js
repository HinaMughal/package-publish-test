
import RespondingGlTextBox from './responding-gl-text-box.vue';
import CustomMDXDocumentation from './responding-gl-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RespondingGlTextBox',
  component:RespondingGlTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RespondingGlTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><responding-gl-text-box v-bind="args" @RespondingGlTextBox-onChange="onChange" @RespondingGlTextBox-onBlur="onBlur" @RespondingGlTextBox-onFocus="onFocus" @RespondingGlTextBox-onKeyPress="onKeyPress" @RespondingGlTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Responding' };





Primary.storyName = 'responding_gl_text_box';

