
import InstrumentDateTextBox from './instrument-date-text-box.vue';
import CustomMDXDocumentation from './instrument-date-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'InstrumentDateTextBox',
  component:InstrumentDateTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InstrumentDateTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><instrument-date-text-box v-bind="args" @InstrumentDateTextBox-onChange="onChange" @InstrumentDateTextBox-onBlur="onBlur" @InstrumentDateTextBox-onFocus="onFocus" @InstrumentDateTextBox-onKeyPress="onKeyPress" @InstrumentDateTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Instrument' };
Primary.storyName = 'instrument_date_text_box';

