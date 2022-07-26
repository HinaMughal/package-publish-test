
/**
 * @author Siddiqui (Ibrahim)
 * @version 0.0.1
 * Description of the component
 */



<template>
     <div>
       <el-row>
         <el-col :span="spanLabel">
            <el-form-item
          @click="$emit('CrBranchNameLabel-onClick')"
        :style="'font-weight:'+styles.fontWeightLabel+ '!important; color:'+styles.colorLabel+'!important; font-size:'+styles.fontSizeLabel+'!important;font-family:'+styles.fontFamilyLabel+'!important'"
        >{{label}}</el-form-item>
         </el-col>
       </el-row>
     </div>
 </template>
<script>
import { defineComponent,toRef } from 'vue';
import { useField } from "vee-validate";
import {ValidationObject,Style} from "./cr-branch-name-label-val-rule"

export default defineComponent({
  name: 'CrBranchNameLabel',
  props: {
    name:{
      type:String,
      required:true,
    },
    spanLabels:{},
    labelText:{}
  },
    setup(props) {
      const { value: cr} = useField(props.name);

    return {
      cr,
      label: typeof props.labelText!=='undefined'?toRef(props,'labelText'):ValidationObject.label,
       styles:Style,
      spanLabel:typeof props.spanLabels!=='undefined'?toRef(props,'spanLabels'):Style.spanLabel,
    };
  },
});
</script>



