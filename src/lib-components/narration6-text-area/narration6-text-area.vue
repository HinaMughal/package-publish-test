
/**
 * @author Ibrahim Ajmal
 * @version 0.0.1
 * Description of the component
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
          <el-form-item :error="narration6Error">
               <el-tooltip
        class="box-item"
        effect="dark"
        :content = "validation.toolTip"
        placement="bottom-start"
        :disabled="toolTipDisabled"
      >
      <el-input
      id="Narration6TextArea"
      @change="$emit('Narration6TextArea-onChange',this.value)"
      @blur="$emit('Narration6TextArea-onBlur',this.value)"
      @keypress="$emit('Narration6TextArea-onKeyPress',this.value)"
      @keyup="$emit('Narration6TextArea-onKeyUp',this.value)"
      @focus="$emit('Narration6TextArea-onFocus',this.value)"
      :maxlength="maxLength" :disabled="isDisabled"
        :style="'text-align-last:'+styles.textAlign+';font-weight:'+styles.fontWeightInput+ '!important;color: var(--el-input-text-color);--el-input-text-color: var(--el-text-color-regular); --el-text-color-regular:'+inputColor+'; font-size:'+styles.fontSizeInput+'!important;font-family:'+styles.fontFamilyInput+'!important'"
        v-model="value"
        resize="none"
        :autosize="{ minRows: minRows, maxRows: maxRows }"
        :placeholder="validation.placeHolder"
        type="textarea"
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
import {ValidationObject, formSchema,Style} from "./narration6-text-area-val-rule"

var formSchema1;

export default defineComponent({
  name: 'Narration6TextArea',
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
    minRows:{},
    maxRows:{},
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

     let { value, errorMessage: narration6Error } = useField(props.name, formSchema1, {
        initialValue: props.values
      });

      watchEffect(() => {
        value.value = props.values
      })

    return {
       value,
      narration6Error,
        validation : ValidationObject,
      styles:Style,
      spanLabel:typeof props.spanLabels!=='undefined'?toRef(props,'spanLabels'):Style.spanLabel,
      spanInput:typeof props.spanInputs!=='undefined'?toRef(props,'spanInputs'):Style.spanInput,
      isDisabled:typeof props.isDisable!=='undefined'?toRef(props,'isDisable'):ValidationObject.isDisabled,
      inputColor:typeof props.colorinput!=='undefined'?toRef(props,'colorinput'):Style.colorInput,
      labelColor:typeof props.colorLabel!=='undefined'?toRef(props,'colorLabel'):Style.colorLabel,
      maxLength: ValidationObject.maxLengthVal,
      toolTipDisabled:ValidationObject.isDisabledTooltip,
      minRows:toRef(props,'minRows'),
      maxRows:toRef(props,'maxRows')
    };
  },
});
</script>






