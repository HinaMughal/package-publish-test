
import BatchNumberDropDown from './batch-number-drop-down.vue';
import CustomMDXDocumentation from './batch-number-drop-down.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'BatchNumberDropDown',
  component:BatchNumberDropDown,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BatchNumberDropDown },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-form><batch-number-drop-down v-bind="args" @BatchNumberDropDown-onChange="onChange" @BatchNumberDropDown-onClick="onClick" @BatchNumberDropDown-onBlur="onBlur" @BatchNumberDropDown-onFocus="onFocus"  /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Batch' , value: [{ option: 'Default-1',value:"1" }, { option: 'Default-2',value:"2" }] };
Primary.storyName = 'batch_number_drop_down';

