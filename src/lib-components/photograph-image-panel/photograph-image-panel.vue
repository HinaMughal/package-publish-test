
/**
 * @author Izza Zaheer (Ibrahim)
 * @version 0.0.1
 * Description of the component
 */





<template>
     <div>
       <el-row>
         <el-col :span="spanLabel">
            <el-form-item
        :style="'font-weight:'+styles.fontWeightLabel+ '!important; color:'+styles.colorLabel+'!important; font-size:'+styles.fontSizeLabel+'!important;font-family:'+styles.fontFamilyLabel+'!important'"
        >{{validation.label}}</el-form-item>
         </el-col>
         <el-col :span="spanImage">
             <el-tooltip
        class="box-item"
        effect="dark"
        :content="validation.toolTip"
        placement="bottom-start"
        :disabled="toolTipDisabled"
      >
         <el-image :fit="contain" @click.right.prevent @copy.prevent @paste.prevent id="PhotographImagePanel" @click="$emit('PhotographImagePanel-onClick')" :style="'height:'+height+';width:'+width+';'" :src="URL"></el-image>
         </el-tooltip>
         </el-col>
       </el-row>
     </div>
 </template>
<script>
import { defineComponent,toRef } from 'vue';
import { useField } from "vee-validate";
import {ValidationObject,Style} from "./photograph-image-panel-val-rule"

export default defineComponent({
  name: 'PhotographImagePanel', 
  props: {
    name:{
      type:String,
      required:true,
    },
    spanLabels:{},
    imageSpan:{},
    url:{},
    imageHeight:{},
    imageWidth:{}
  },
    setup(props) {
      const { value: photograph} = useField(props.name);

    return {
      photograph,
      validation : ValidationObject,
       styles:Style,
       URL:toRef(props,'url'),
       height:typeof props.imageHeight!=='undefined'?toRef(props,'imageHeight'):Style.height,
       width:typeof props.imageWidth!=='undefined'?toRef(props,'imageWidth'):Style.width,
      spanLabel:typeof props.spanLabels!=='undefined'?toRef(props,'spanLabels'):Style.spanLabel,
      spanImage:typeof props.imageSpan!=='undefined'?toRef(props,'imageSpan'):Style.spanImage,
      toolTipDisabled:ValidationObject.isDisabledTooltip
    };
  },
});
</script>




