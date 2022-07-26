
import GlRadioButton from './gl-radio-button.vue';
import CustomMDXDocumentation from './gl-radio-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'GlRadioButton',
  component:GlRadioButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GlRadioButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><gl-radio-button v-bind="args" @GlRadioButton-onChange="onChange" @GlRadioButton-onClick="onClick" @GlRadioButton-onBlur="onBlur" @GlRadioButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
 
 
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Gl'  };
Primary.storyName = 'gl_radio_button';

