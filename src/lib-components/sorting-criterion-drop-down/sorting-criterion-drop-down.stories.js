
import SortingCriterionDropDown from './sorting-criterion-drop-down.vue';
import CustomMDXDocumentation from './sorting-criterion-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'SortingCriterionDropDown',
  component:SortingCriterionDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SortingCriterionDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><sorting-criterion-drop-down v-bind="args" @SortingCriterionDropDown-onChange="onChange" @SortingCriterionDropDown-onClick="onClick" @SortingCriterionDropDown-onBlur="onBlur" @SortingCriterionDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Sorting' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'sorting_criterion_drop_down';

