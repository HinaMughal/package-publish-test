
import RespondAdvicesTable from './respond-advices-table.vue';
import CustomMDXDocumentation from './respond-advices-table.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'RespondAdvicesTable',
  component:RespondAdvicesTable,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RespondAdvicesTable },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`

template: '<el-form><respond-advices-table v-bind="args" @RespondAdvicesTable-onCurrentRow="onCurrentRow"  /> </el-form>',
  methods: {
    onCurrentRow: action("onCurrentRow"),
  }
});

export const Primary = Template.bind({});
Primary.args = { name: 'Respond'  };
Primary.storyName = 'respond_advices_table';

