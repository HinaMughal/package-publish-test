
import OriginDateTextBox from './origin-date-text-box.vue';
import CustomMDXDocumentation from './origin-date-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OriginDateTextBox',
  component:OriginDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OriginDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><origin-date-text-box v-bind="args" @OriginDateTextBox-onChange="onChange" @OriginDateTextBox-onBlur="onBlur" @OriginDateTextBox-onFocus="onFocus" @OriginDateTextBox-onKeyPress="onKeyPress" @OriginDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Origin' };





Primary.storyName = 'origin_date_text_box';

