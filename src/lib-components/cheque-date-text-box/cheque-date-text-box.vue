
/**
 * @author Ahsan/Jetander
 * @version 0.0.1
 * This textbox is used to enter Cheque Date.
 */
<template>
  <div>
    <el-row>
      <el-col :span="spanLabel">
        <el-form-item
          :style="
            'font-weight:' +
            styles.fontWeightLabel +
            '!important; color:' +
            labelColor +
            '!important; font-size:' +
            styles.fontSizeLabel +
            '!important;font-family:' +
            styles.fontFamilyLabel +
            '!important'
          "
          >{{ validation.label }}</el-form-item
        >
      </el-col>
      <el-col :span="spanInput">
        <el-form-item :error="chequeError">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="validation.toolTip"
            placement="bottom-start"
            :disabled="toolTipDisabled"
          >
            <el-input
              id="ChequeDateTextBox"
              @change="$emit('ChequeDateTextBox-onChange', this.value)"
              @blur="$emit('ChequeDateTextBox-onBlur', this.value)"
              @keypress="$emit('ChequeDateTextBox-onKeyPress', this.value)"
              @keyup="$emit('ChequeDateTextBox-onKeyUp', this.value)"
              @focus="$emit('ChequeDateTextBox-onFocus', this.value)"
              :maxlength="maxLength"
              :disabled="isDisabled"
              :style="
                'text-align-last:' +
                styles.textAlign +
                ';font-weight:' +
                styles.fontWeightInput +
                '!important;color: var(--el-input-text-color);--el-input-text-color: var(--el-text-color-regular); --el-text-color-regular:' +
                inputColor +
                '; font-size:' +
                styles.fontSizeInput +
                '!important;font-family:' +
                styles.fontFamilyInput +
                '!important'
              "
              v-model="value"
              v-mask="validation.mask"
              :placeholder="validation.placeHolder"
              v-bind="$attrs"
            >
            </el-input>
          </el-tooltip>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent, toRef, watchEffect } from "vue";
import { useField } from "vee-validate";
import {
  ValidationObject,
  formSchema,
  Style,
} from "./cheque-date-text-box-val-rule";

export default defineComponent({
  name: "ChequeDateTextBox",
  props: {
    name: {
      type: String,
      required: true,
    },
    spanLabels: {},
    spanInputs: {},
    isDisable: {},
    values: {},
    colorinput: {},
    colorLabel: {},
  },
  setup(props) {
    let { value, errorMessage: chequeError } = useField(
      props.name,
      formSchema,
      {
        initialValue: props.values,
      }
    );

    watchEffect(() => {
      value.value = props.values;
    });

    return {
      value,
      chequeError,
      validation: ValidationObject,
      styles: Style,
      spanLabel:
        typeof props.spanLabels !== "undefined"
          ? toRef(props, "spanLabels")
          : Style.spanLabel,
      spanInput:
        typeof props.spanInputs !== "undefined"
          ? toRef(props, "spanInputs")
          : Style.spanInput,
      isDisabled:
        typeof props.isDisable !== "undefined"
          ? toRef(props, "isDisable")
          : ValidationObject.isDisabled,
      inputColor:
        typeof props.colorinput !== "undefined"
          ? toRef(props, "colorinput")
          : Style.colorInput,
      labelColor:
        typeof props.colorLabel !== "undefined"
          ? toRef(props, "colorLabel")
          : Style.colorLabel,
      maxLength: ValidationObject.maxLengthVal,
      toolTipDisabled: ValidationObject.isDisabledTooltip,
    };
  },
});
</script>







