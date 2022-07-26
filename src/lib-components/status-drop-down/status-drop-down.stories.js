
import StatusDropDown from './status-drop-down.vue';
import CustomMDXDocumentation from './status-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'StatusDropDown',
  component:StatusDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { StatusDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><status-drop-down v-bind="args" @StatusDropDown-onChange="onChange" @StatusDropDown-onClick="onClick" @StatusDropDown-onBlur="onBlur" @StatusDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Status' , value: [{ option: 'All',value:"1" }, { option: 'Unauthorize',value:"2" } ,{ option: 'Authorize',value:"3" }] };
Primary.storyName = 'status_drop_down';

