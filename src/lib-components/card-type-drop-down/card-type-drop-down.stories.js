
import CardTypeDropDown from './card-type-drop-down.vue';
import CustomMDXDocumentation from './card-type-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CardTypeDropDown',
  component: CardTypeDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CardTypeDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><card-type-drop-down v-bind="args" @CardTypeDropDown-onChange="onChange" @CardTypeDropDown-onClick="onClick" @CardTypeDropDown-onBlur="onBlur" @CardTypeDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Card', value: [{ option: 'Green', value: "1" }, { option: 'Gold', value: "2" }] };





Primary.storyName = 'card_type_drop_down';

