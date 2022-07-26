
/**
 * @author Zeeshan Masood (Ibrahim)
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
          <el-form-item :error="originateError">    
          <el-tooltip
        class="box-item"
        effect="dark"
        :content="validation.toolTip"
        placement="bottom-start"
        :disabled="toolTipDisabled"
      >
          <el-radio-group id="OriginateRadioButton"   v-model="value" :disabled="isDisabled" 
          @change="$emit('OriginateRadioButton-onChange',this.value)"
          @click="$emit('OriginateRadioButton-onClick',this.value)"
      @blur="$emit('OriginateRadioButton-onBlur',this.value)"
      @focus="$emit('OriginateRadioButton-onFocus',this.value)"
          :style="'font-weight:'+styles.fontWeightInput+ '!important;color: var(--el-input-text-color);--el-input-text-color: var(--el-text-color-regular); --el-text-color-regular:'+inputColor+'; font-size:'+styles.fontSizeInput+'!important;font-family:'+styles.fontFamilyInput+'!important'"
          >
    <el-radio :style="'margin-right:'+marginRight+'rem;'" :label="item.value" v-for="(item, index) in validation.radioGroup" :key="index">{{ item.label }}</el-radio>
  </el-radio-group>
     </el-tooltip>
          </el-form-item>
         </el-col>
       </el-row>
     </div>
 </template>
<script>
import { defineComponent,toRef,watchEffect} from 'vue';
import { useField } from "vee-validate";
import {ValidationObject, formSchema,Style} from "./originate-radio-button-val-rule"

export default defineComponent({
  name: 'OriginateRadioButton',
  props: {
    name:{
      type:String,
      required:true,
    },
    spanLabels:{},
    spanInputs:{},
    isDisable:{},
    value:{},
    colorinput:{},
    colorLabel:{},
    marginRight:{}
  },
    setup(props) {
        let { value, errorMessage: originateError } = useField(props.name, formSchema, {
        initialValue: props.value
      });
     watchEffect(() => {
        value.value = props.value
      })

    return {
      value,
      originateError,
      validation : ValidationObject,
      styles:Style,
      spanLabel:typeof props.spanLabels!=='undefined'?toRef(props,'spanLabels'):Style.spanLabel,
      spanInput:typeof props.spanInputs!=='undefined'?toRef(props,'spanInputs'):Style.spanInput,
      isDisabled:typeof props.isDisable!=='undefined'?toRef(props,'isDisable'):ValidationObject.isDisabled,
      inputColor:typeof props.colorinput!=='undefined'?toRef(props,'colorinput'):Style.colorInput,
      labelColor:typeof props.colorLabel!=='undefined'?toRef(props,'colorLabel'):Style.colorLabel,
      toolTipDisabled:ValidationObject.isDisabledTooltip,
      marginRight:toRef(props,'marginRight')
    };
  },
});
</script>





