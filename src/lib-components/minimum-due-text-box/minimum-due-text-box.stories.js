
import MinimumDueTextBox from './minimum-due-text-box.vue';
import CustomMDXDocumentation from './minimum-due-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'MinimumDueTextBox',
  component:MinimumDueTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MinimumDueTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><minimum-due-text-box v-bind="args" @MinimumDueTextBox-onChange="onChange" @MinimumDueTextBox-onBlur="onBlur" @MinimumDueTextBox-onFocus="onFocus" @MinimumDueTextBox-onKeyPress="onKeyPress" @MinimumDueTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Minimum' , values:'0.00'};

Primary.storyName = 'minimum_due_text_box';