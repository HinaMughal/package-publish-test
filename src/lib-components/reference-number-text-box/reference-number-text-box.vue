
/**
 * @author Mohsin Ali | Mirza Ehtisham Danish
 * @version 0.0.1
 * Reference No is a Text Box Component that refers to unique nos generated against voucher set
 * 
 * Validation 
    - Maximum data length is 10
    - Field is alphaNumeric
 */
<template>
     <div>
       <el-row>
         <el-col :span="spanLabel">
            <el-form-item
        :style="'font-weight:'+styles.fontWeightLabel+ '!important; color:'+labelColor+'!important; font-size:'+styles.fontSizeLabel+'!important;font-family:'+styles.fontFamilyLabel+'!important'"
        >{{validation.label}}</el-form-item>
         </el-col>
         <el-col :span="spanInput">
          <el-form-item :error="referenceError">
               <el-tooltip
        class="box-item"
        effect="dark"
        :content = "validation.toolTip"
        placement="bottom-start"
        :disabled="toolTipDisabled"
      >
      <el-input
      id="ReferenceNumberTextBox"
      @change="$emit('ReferenceNumberTextBox-onChange',this.value)"
      @blur="$emit('ReferenceNumberTextBox-onBlur',this.value)"
      @keypress="$emit('ReferenceNumberTextBox-onKeyPress',this.value)"
      @keyup="$emit('ReferenceNumberTextBox-onKeyUp',this.value)"
      @focus="$emit('ReferenceNumberTextBox-onFocus',this.value)"
      :maxlength="maxLength" :disabled="isDisabled"
        :style="'text-align-last:'+styles.textAlign+';font-weight:'+styles.fontWeightInput+ '!important;color: var(--el-input-text-color);--el-input-text-color: var(--el-text-color-regular); --el-text-color-regular:'+inputColor+'; font-size:'+styles.fontSizeInput+'!important;font-family:'+styles.fontFamilyInput+'!important'"
        v-model="value" 
        v-mask="validation.mask"
        :placeholder="validation.placeHolder"
        v-bind="$attrs" >
      </el-input> 
         </el-tooltip>
          </el-form-item>
         </el-col>
       </el-row>
     </div>
 </template>
<script>
import { defineComponent,toRef,watchEffect} from 'vue';
import { useField } from "vee-validate";
import {ValidationObject, formSchema,Style} from "./reference-number-text-box-val-rule"
var formSchema1
export default defineComponent({
  name: 'ReferenceNumberTextBox',
  props: {
    name:{
      type:String,
      required:true,
    },
    spanLabels:{},
    spanInputs:{},
    isDisable:{},
    values:{},
    colorinput:{},
    colorLabel:{},
    mandatory:{}
  },
    setup(props) {
       if (props.mandatory)
      {
        formSchema1 = formSchema.required('Field is required')
      }
      else
      {
        formSchema1=formSchema
      }

     let { value, errorMessage: referenceError } = useField(props.name, formSchema1, {
        initialValue: props.values
      });

      watchEffect(() => {
        value.value = props.values
      })

    return {
       value,
      referenceError,
        validation : ValidationObject,
      styles:Style,
      spanLabel:typeof props.spanLabels!=='undefined'?toRef(props,'spanLabels'):Style.spanLabel,
      spanInput:typeof props.spanInputs!=='undefined'?toRef(props,'spanInputs'):Style.spanInput,
      isDisabled:typeof props.isDisable!=='undefined'?toRef(props,'isDisable'):ValidationObject.isDisabled,
      inputColor:typeof props.colorinput!=='undefined'?toRef(props,'colorinput'):Style.colorInput,
      labelColor:typeof props.colorLabel!=='undefined'?toRef(props,'colorLabel'):Style.colorLabel,
      maxLength: ValidationObject.maxLengthVal,
      toolTipDisabled:ValidationObject.isDisabledTooltip
    };
  },
});
</script>







