/*
 * @author Syed Saeed (@TeamLead Syeda Nisha Kazmi)
 * @version 0.0.1

 * Narration1 is a textbox component that defines detailed description fro financial transactoin to be used for reporting purpose
 * 
 * Validations:
 * - Field is Editable based screen behaviour
 * - Open Text field
 * - Text input is left Aligned
 * - Maximum Data length is 30
 * - Field is madatory
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
          <el-form-item :error="narration1Error">
               <el-tooltip
        class="box-item"
        effect="dark"
        :content = "validation.toolTip"
        placement="bottom-start"
        :disabled="toolTipDisabled"
      >
      <el-input
      id="Narration1TextBox"
      @change="$emit('Narration1TextBox-onChange',this.value)"
      @blur="$emit('Narration1TextBox-onBlur',this.value)"
      @keypress="$emit('Narration1TextBox-onKeyPress',this.value)"
      @keyup="$emit('Narration1TextBox-onKeyUp',this.value)"
      @focus="$emit('Narration1TextBox-onFocus',this.value)"
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
import {ValidationObject, formSchema,Style} from "./narration1-text-box-val-rule"

var formSchema1;

export default defineComponent({
  name: 'Narration1TextBox',
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

     let { value, errorMessage: narration1Error } = useField(props.name, formSchema1, {
        initialValue: props.values
      });

      watchEffect(() => {
        value.value = props.values
      })

    return {
       value,
      narration1Error,
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







