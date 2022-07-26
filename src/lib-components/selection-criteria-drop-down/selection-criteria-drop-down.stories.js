
import SelectionCriteriaDropDown from './selection-criteria-drop-down.vue';
import CustomMDXDocumentation from './selection-criteria-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SelectionCriteriaDropDown',
  component:SelectionCriteriaDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SelectionCriteriaDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><selection-criteria-drop-down v-bind="args" @SelectionCriteriaDropDown-onChange="onChange" @SelectionCriteriaDropDown-onClick="onClick" @SelectionCriteriaDropDown-onBlur="onBlur" @SelectionCriteriaDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Selection' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'selection_criteria_drop_down';

