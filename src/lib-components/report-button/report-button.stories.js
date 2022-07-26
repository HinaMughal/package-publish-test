
import ReportButton from './report-button.vue';
import CustomMDXDocumentation from './report-button.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ReportButton',
  component:ReportButton,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ReportButton },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><report-button v-bind="args" @ReportButton-onClick="onClick" @ReportButton-onFocus="onFocus" /> </el-form>',
  methods: {
    onClick: action("onClick"),
    onFocus: action("onFocus"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Report' , nativeType:"button" };
Primary.storyName = 'report_button';

