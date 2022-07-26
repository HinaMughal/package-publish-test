
import ValueDateTextBox from './value-date-text-box.vue';
import CustomMDXDocumentation from './value-date-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ValueDateTextBox',
  component:ValueDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ValueDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><value-date-text-box v-bind="args" @ValueDateTextBox-onChange="onChange" @ValueDateTextBox-onBlur="onBlur" @ValueDateTextBox-onFocus="onFocus" @ValueDateTextBox-onKeyPress="onKeyPress" @ValueDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Value' };
Primary.storyName = 'value_date_text_box';

