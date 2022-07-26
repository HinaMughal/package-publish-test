
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
        :style="'font-weight:'+styles.fontWeightLabel+ '!important; color:'+styles.colorLabel+'!important; font-size:'+styles.fontSizeLabel+'!important;font-family:'+styles.fontFamilyLabel+'!important'"
        >{{validation.label}}</el-form-item>
         </el-col>
         <el-col :span="spanInput">
          <el-form-item :error="clearingError">
           <el-card :style="'width:'+tableWidth+'%;max-width:'+tableWidth+'%;background-color:rgb(162,200,168)'">
      <el-table
      :header-cell-style="{ background: 'rgb(162,200,168)', color: 'black', 'font-family': 'Arial', 'font-weight':'normal', 'text-align-last':'center' }"
      id="ClearingInstrumentTable"
         :data="dataTable"
         :height="tableHeight"
         ref="singleTable"
         highlight-current-row
         border
         @current-change="selectRow">
          <el-table-column v-for="column in tableColumns"
          :key="column.label"
          :prop="column.prop" 
          :label="column.label"  
          :align="column.align"
          :min-width="column.columnsWidth"
           />

        </el-table>
        </el-card>
          </el-form-item>
         </el-col>
       </el-row>
     </div>
 </template>
<script>
import { defineComponent,toRef} from 'vue';
import { useField } from "vee-validate";
import {ValidationObject,Style} from "./clearing-instrument-table-val-rule"

export default defineComponent({
  name: 'ClearingInstrumentTable', 
    methods:{
      selectRow (val) {
      this.selectedData = val;
      this.$emit('ClearingInstrumentTable-onCurrentRow',this.selectedData)
    }
    },
  props: {
    name:{
      type:String,
      required:true,
    },
    spanLabels:{},
    spanInputs:{},
    tableData: {},
    tableColumns: {},
    tableHeight:{},
    tableWidth:{}
  },
    setup(props) {
      const { value: clearing, errorMessage:  clearingError} = useField(props.name);

    return {
      clearing,
      clearingError,
      dataTable:toRef(props,'tableData'),
      validation : ValidationObject,
       styles:Style,
      spanLabel:typeof props.spanLabels!=='undefined'?toRef(props,'spanLabels'):Style.spanLabel,
      spanInput:typeof props.spanInputs!=='undefined'?toRef(props,'spanInputs'):Style.spanInput,
      tableColumns: ValidationObject.tableColumns,
      selectedData: null,
      tableHeight:toRef(props,'tableHeight'),
      tableWidth:toRef(props,'tableWidth')
    };
  },
});
</script>


