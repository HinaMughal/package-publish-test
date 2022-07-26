
import ExceptionTable from './exception-table.vue';
import CustomMDXDocumentation from './exception-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ExceptionTable',
  component:ExceptionTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExceptionTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><exception-table v-bind="args" @ExceptionTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Exception'  };
Primary.storyName = 'exception_table';

