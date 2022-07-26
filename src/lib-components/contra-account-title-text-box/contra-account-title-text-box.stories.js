
import ContraAccountTitleTextBox from './contra-account-title-text-box.vue';
import CustomMDXDocumentation from './contra-account-title-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ContraAccountTitleTextBox',
  component:ContraAccountTitleTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ContraAccountTitleTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><contra-account-title-text-box v-bind="args" @ContraAccountTitleTextBox-onChange="onChange" @ContraAccountTitleTextBox-onBlur="onBlur" @ContraAccountTitleTextBox-onFocus="onFocus" @ContraAccountTitleTextBox-onKeyPress="onKeyPress" @ContraAccountTitleTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Contra' };
Primary.args = { value : '1001-0081-564231-15-3 AC-TITLE' }




Primary.storyName = 'contra_account_title_text_box';

