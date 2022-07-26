
import SelectionConditionsRadioButton- from './selection-conditions-radio-button.vue';
import CustomMDXDocumentation from './selection-conditions-radio-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SelectionConditionsRadioButton-',
  component:SelectionConditionsRadioButton-,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SelectionConditionsRadioButton- },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><selection-conditions-radio-button v-bind="args" @SelectionConditionsRadioButton--onChange="onChange" @SelectionConditionsRadioButton--onClick="onClick" @SelectionConditionsRadioButton--onBlur="onBlur" @SelectionConditionsRadioButton--onFocus="onFocus" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
 
 
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Selection'  };
Primary.storyName = 'selection_conditions_radio_button';

