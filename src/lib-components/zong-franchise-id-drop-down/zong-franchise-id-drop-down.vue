
/**
 * @author Ahsan/Jetander
 * @version 0.0.1
 * This DropDown is used to select Zong Franchise Id.
 */


<template>
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
      <el-form-item :error="zongError">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="validation.toolTip"
          placement="bottom-start"
          :disabled="toolTipDisabled"
        >
          <el-select
            id="ZongFranchiseIdDropDown"
            v-model="value"
            :disabled="isDisabled"
            filterable
            :placeholder="validation.placeholder"
            @change="$emit('ZongFranchiseIdDropDown-onChange', this.value)"
            @click="$emit('ZongFranchiseIdDropDown-onClick', this.value)"
            @blur="$emit('ZongFranchiseIdDropDown-onBlur', this.value)"
            @focus="$emit('ZongFranchiseIdDropDown-onFocus', this.value)"
            :style="
              'font-weight:' +
              styles.fontWeightInput +
              '!important;color: var(--el-input-text-color);--el-input-text-color: var(--el-text-color-regular); --el-text-color-regular:' +
              inputColor +
              '; font-size:' +
              styles.fontSizeInput +
              '!important;font-family:' +
              styles.fontFamilyInput +
              '!important;width:100%'
            "
          >
            <el-option
              v-for="item in dropDownList"
              :key="item"
              :label="item.option"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-tooltip>
      </el-form-item>
    </el-col>
  </el-row>
</template>
<script>
import { defineComponent, toRef, watchEffect } from "vue";
import { useField } from "vee-validate";
import {
  ValidationObject,
  formSchema,
  Style,
} from "./zong-franchise-id-drop-down-val-rule";

export default defineComponent({
  name: "ZongFranchiseIdDropDown",
  props: {
    name: {
      type: String,
      required: true,
    },
    spanLabels: {},
    spanInputs: {},
    isDisable: {},
    value: {},
    defaultValue: {},
    colorinput: {},
    colorLabel: {},
  },
  setup(props) {
    let { value, errorMessage: zongError } = useField(props.name, formSchema, {
      initialValue: props.defaultValue,
    });
    watchEffect(() => {
      value.value = props.defaultValue;
    });

    return {
      value,
      zongError,
      dropDownList: toRef(props, "value"),
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
      toolTipDisabled: ValidationObject.isDisabledTooltip,
    };
  },
});
</script>




