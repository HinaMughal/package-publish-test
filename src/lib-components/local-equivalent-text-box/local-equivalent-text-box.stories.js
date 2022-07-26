
import LocalEquivalentTextBox from './local-equivalent-text-box.vue';
import CustomMDXDocumentation from './local-equivalent-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'LocalEquivalentTextBox',
  component:LocalEquivalentTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LocalEquivalentTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><local-equivalent-text-box v-bind="args" @LocalEquivalentTextBox-onChange="onChange" @LocalEquivalentTextBox-onBlur="onBlur" @LocalEquivalentTextBox-onFocus="onFocus" @LocalEquivalentTextBox-onKeyPress="onKeyPress" @LocalEquivalentTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Local' };
Primary.storyName = 'local_equivalent_text_box';

