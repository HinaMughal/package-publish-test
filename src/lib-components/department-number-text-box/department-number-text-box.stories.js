import DepartmentNumberTextBox from "./department-number-text-box.vue";
import CustomMDXDocumentation from "./department-number-text-box.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "DepartmentNumberTextBox",
  component: DepartmentNumberTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DepartmentNumberTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><department-number-text-box v-bind="args" @DepartmentNumberTextBox-onChange="onChange" @DepartmentNumberTextBox-onBlur="onBlur" @DepartmentNumberTextBox-onFocus="onFocus" @DepartmentNumberTextBox-onKeyPress="onKeyPress" @DepartmentNumberTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  },
});

export const Primary = Template.bind({});
Primary.args = { name: "Department" };

Primary.storyName = "department_number_text_box";
