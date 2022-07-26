
import IdenMainTextBox from './iden-main-text-box.vue';
import CustomMDXDocumentation from './iden-main-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'IdenMainTextBox',
  component:IdenMainTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { IdenMainTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><iden-main-text-box v-bind="args" @IdenMainTextBox-onChange="onChange" @IdenMainTextBox-onBlur="onBlur" @IdenMainTextBox-onFocus="onFocus" @IdenMainTextBox-onKeyPress="onKeyPress" @IdenMainTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Iden' };





Primary.storyName = 'iden_main_text_box';

