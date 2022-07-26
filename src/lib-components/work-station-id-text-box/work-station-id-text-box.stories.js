
import WorkStationIdTextBox from './work-station-id-text-box.vue';
import CustomMDXDocumentation from './work-station-id-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'WorkStationIdTextBox',
  component:WorkStationIdTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { WorkStationIdTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><work-station-id-text-box v-bind="args" @WorkStationIdTextBox-onChange="onChange" @WorkStationIdTextBox-onBlur="onBlur" @WorkStationIdTextBox-onFocus="onFocus" @WorkStationIdTextBox-onKeyPress="onKeyPress" @WorkStationIdTextBox-onKeyUp="onKeyUp" /> </el-form>',
  methods: {
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyPress: action("onKeyPress"),
    onKeyUp: action("onKeyUp"),
  }

});

export const Primary = Template.bind({});
Primary.args = { name: 'Work' };
Primary.args = { value: '192.168.2.35'}





Primary.storyName = 'work_station_id_text_box';

