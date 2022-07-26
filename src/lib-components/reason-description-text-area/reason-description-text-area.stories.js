
import ReasonDescriptionTextArea from './reason-description-text-area.vue';
import CustomMDXDocumentation from './reason-description-text-area.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'ReasonDescriptionTextArea',
  component:ReasonDescriptionTextArea,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ReasonDescriptionTextArea },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><reason-description-text-area v-bind="args" @ReasonDescriptionTextArea-onChange="onChange" @ReasonDescriptionTextArea-onBlur="onBlur" @ReasonDescriptionTextArea-onFocus="onFocus" @ReasonDescriptionTextArea-onKeyPress="onKeyPress" @ReasonDescriptionTextArea-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Reason' };
Primary.storyName = 'reason_description_text_area';

