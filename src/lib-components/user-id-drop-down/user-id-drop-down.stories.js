
import UserIdDropDown from './user-id-drop-down.vue';
import CustomMDXDocumentation from './user-id-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'UserIdDropDown',
  component:UserIdDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UserIdDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><user-id-drop-down v-bind="args" @UserIdDropDown-onChange="onChange" @UserIdDropDown-onClick="onClick" @UserIdDropDown-onBlur="onBlur" @UserIdDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'User' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'user_id_drop_down';

