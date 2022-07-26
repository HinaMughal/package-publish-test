import ZongFranchiseIdDropDown from "./zong-franchise-id-drop-down.vue";
import CustomMDXDocumentation from "./zong-franchise-id-drop-down.mdx";
import { action } from "@storybook/addon-actions";

export default {
  title: "ZongFranchiseIdDropDown",
  component: ZongFranchiseIdDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ZongFranchiseIdDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<el-form><zong-franchise-id-drop-down v-bind="args" @ZongFranchiseIdDropDown-onChange="onChange" @ZongFranchiseIdDropDown-onClick="onClick" @ZongFranchiseIdDropDown-onBlur="onBlur" @ZongFranchiseIdDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  name: "Zong",
  value: [
    { option: "Default-1", value: "1" },
    { option: "Default-2", value: "2" },
  ],
};

Primary.storyName = "zong_franchise_id_drop_down";
