
import DepartmentNumberDropDown from './department-number-drop-down.vue';
import CustomMDXDocumentation from './department-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'DepartmentNumberDropDown',
  component:DepartmentNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DepartmentNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><department-number-drop-down v-bind="args" @DepartmentNumberDropDown-onChange="onChange" @DepartmentNumberDropDown-onClick="onClick" @DepartmentNumberDropDown-onBlur="onBlur" @DepartmentNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Department' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'department_number_drop_down';

