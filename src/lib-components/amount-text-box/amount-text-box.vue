
/**
 * @author Ahsan/Jetander
 * @version 0.0.1
 * This text box is used to display Amount.
 */
<template>
  <div>
    <el-row>
      <el-col :span="spanLabel">
        <el-form-item :style="
          'font-weight:' +
          styles.fontWeightLabel +
          '!important; color:' +
          labelColor +
          '!important; font-size:' +
          styles.fontSizeLabel +
          '!important;font-family:' +
          styles.fontFamilyLabel +
          '!important'
        ">{{ validation.label }}</el-form-item>
      </el-col>
      <el-col :span="spanInput">
        <el-form-item :error="amountError">
          <el-tooltip class="box-item" effect="dark" :content="validation.toolTip" placement="bottom-start"
            :disabled="toolTipDisabled">
            <el-input id="AmountTextBox" @change="$emit('AmountTextBox-onChange', this.value)" @blur="onAmountBlur"
              @keypress="isNumber($event)" @keyup="$emit('AmountTextBox-onKeyUp', this.value)"
              @focus="$emit('AmountTextBox-onFocus', this.value)" :maxlength="maxLength" :disabled="isDisabled" :style="
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
              " v-model="value" v-mask="validation.mask" :placeholder="validation.placeHolder" v-bind="$attrs">
            </el-input>
          </el-tooltip>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent, toRef, watchEffect, h } from "vue";
import { useField } from "vee-validate";
import {
  ValidationObject,
  formSchema,
  Style,
} from "./amount-text-box-val-rule";

export default defineComponent({
  name: "AmountTextBox",
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
    amountLength: {}
  },
  setup(props) {
    let { value, errorMessage: amountError } = useField(
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
      amountError,
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
      amtLength: toRef(props, 'amountLength')
    };
  },
  methods: {
    isNumber: function (evt) {
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 || (!this.value.includes('.') && this.value.length > this.amtLength) || (this.value.includes('.') && charCode === 46) || (this.value != null && this.value.indexOf(".") > -1 && (this.value.split(".")[1].length > 1))) {
        evt.preventDefault();
      } else {

        return true;
      }
    },
    //
    onAmountBlur() {
      this.value = this.value.toString().replace(/,/g, "");
      console.log("without comma", this.value);
      this.value = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log("with comma", this.value);
      if (this.value.charAt(0) === ".") {
        this.value = "0" + this.value
      }
      if (!this.value.includes(".")) {
        if (this.value == "") {
          this.value = "0.00"
        }
        else {
          this.value = this.value + ".00"
        }
      }
      if (this.value.includes(".")) {
        if (this.value.charAt(this.value.length - 2) == ".") {
          this.value = this.value + "0"
        }
        if (this.value.charAt(this.value.length - 1) == ".") {
          this.value = this.value + "00"
        }
      }
      this.$emit('AmountTextBox-onBlur', this.value)
    }
  }
});
</script>







