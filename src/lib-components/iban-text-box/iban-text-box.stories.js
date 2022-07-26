
import ibanTextBox from './iban-text-box.vue';
import CustomMDXDocumentation from './iban-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ibanTextBox',
  component:ibanTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ibanTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><iban-text-box v-bind="args" @ibanTextBox-onChange="onChange" @ibanTextBox-onBlur="onBlur" @ibanTextBox-onFocus="onFocus" @ibanTextBox-onKeyPress="onKeyPress" @ibanTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Iban' };

Primary.storyName = 'iban_text_box';