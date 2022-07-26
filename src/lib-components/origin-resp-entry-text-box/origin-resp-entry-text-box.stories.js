
import OriginRespEntryTextBox from './origin-resp-entry-text-box.vue';
import CustomMDXDocumentation from './origin-resp-entry-text-box.mdx';
import { action } from '@storybook/addon-actions'

export default {
  title: 'OriginRespEntryTextBox',
  component:OriginRespEntryTextBox,
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OriginRespEntryTextBox },
  // The storybook `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
template: '<el-form><origin-resp-entry-text-box v-bind="args" @OriginRespEntryTextBox-onChange="onChange" @OriginRespEntryTextBox-onBlur="onBlur" @OriginRespEntryTextBox-onFocus="onFocus" @OriginRespEntryTextBox-onKeyPress="onKeyPress" @OriginRespEntryTextBox-onKeyUp="onKeyUp" /> </el-form>',
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





Primary.storyName = 'origin_resp_entry_text_box';

