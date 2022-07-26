
import ActivityDropDown from './activity-drop-down.vue';
import CustomMDXDocumentation from './activity-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ActivityDropDown',
  component:ActivityDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ActivityDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><activity-drop-down v-bind="args" @ActivityDropDown-onChange="onChange" @ActivityDropDown-onClick="onClick" @ActivityDropDown-onBlur="onBlur" @ActivityDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Activity' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'activity_drop_down';

