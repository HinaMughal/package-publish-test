
/**
 * @author Name
 * @version 0.0.1
 * Description of the component
 */



<template>
  <div>
    <el-row>
      <el-col :span="spanInput">
        <el-button
        id="TransactionDetailsButton"
          @click="$emit('TransactionDetailsButton-onClick')"
      @focus="$emit('TransactionDetailsButton-onFocus')"
          :style="
            'font-family:' +
            styles.fontFamilyLabel +
            '; font-weight:' +
            styles.fontWeightLabel +
            ';font-size:' +
            styles.fontSizeLabel +
            ';height:' +
            styles.height +
            ';width:' +
            styles.width +
            ';'
          "
          :disabled="isDisabled"
          :native-type="type"
          >{{ validation.label }}</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent,toRef} from 'vue';
import { useField } from "vee-validate";
import {ValidationObject, formSchema,Style} from "./transaction-details-button-val-rule"

export default defineComponent({
  name: 'TransactionDetailsButton',
  props: {
    name:{
      type:String,
      required:true,
    },
    spanInputs:{},
    isDisable:{},
    nativeType:{}
  },
    setup(props) {
      const { value: transaction} = useField(props.name, formSchema);

    return {
      transaction,
      validation: ValidationObject,
      styles: Style,
       spanInput: typeof props.spanInputs!=='undefined'?toRef(props,'spanInputs'):Style.spanButton,
      isDisabled: typeof props.isDisable!=='undefined'?toRef(props,'isDisable'):ValidationObject.isDisabled,
      type:typeof props.nativeType!=='undefined'?toRef(props,'nativeType'):ValidationObject.buttonType,
    };
  },
});
</script>
<style scoped>
.el-button{
  background-image: linear-gradient(to bottom,white 8%, rgb(240,240,240) 48%);
  color: black;
}
.el-button.is-disabled{
  background-image: linear-gradient(white -100%,rgb(240,240,240) 200%);
  color: grey;
}
</style>





