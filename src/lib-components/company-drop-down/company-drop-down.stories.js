
import CompanyDropDown from './company-drop-down.vue';
import CustomMDXDocumentation from './company-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'CompanyDropDown',
  component:CompanyDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CompanyDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><company-drop-down v-bind="args" @CompanyDropDown-onChange="onChange" @CompanyDropDown-onClick="onClick" @CompanyDropDown-onBlur="onBlur" @CompanyDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Company' , value: [{ value: "108-1", option: "108-1 BILL CREDIT CARD" },
{ value: "108-2", option: "108-2 BILL COMPANY ACCOUNT" }] };

Primary.storyName = 'company_drop_down';

