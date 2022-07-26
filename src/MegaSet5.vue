<template>
  <Form as="el-form" @submit="onSubmit">
    <el-row>
      <el-col :md="24" :lg="24">
        <ExceptionTable
          :spanInputs="ExceptionTable.inputSpan"
          :spanLabels="ExceptionTable.labelSpan"
          :tableHeight="ExceptionTable.tableHeight"
          :tableWidth="ExceptionTable.tableWidth"
          :tableData="configObject.ExceptionTable.tableData"
          name="ExceptionTable"
          v-if="configObject.ExceptionTable.isVisible"
        />
      </el-col>
    </el-row>
    <fieldset v-if="configObject.Section1.isVisible">
      <br />
      <el-row>
        <el-col :md="12" :lg="12">
          <ReasonCodeDropDown
            @ReasonCodeDropDown-onChange="
              (val) => {
                $emit('ReasonCodeDropDown-onChange', val);
              }
            "
            :colorinput="configObject.ReasonCodeDropDown.inputColor"
            :colorLabel="configObject.ReasonCodeDropDown.labelColor"
            :defaultValue="configObject.ReasonCodeDropDown.reasonCodeValue"
            :isDisable="configObject.ReasonCodeDropDown.isDisabled"
            :value="configObject.ReasonCodeDropDown.reasonCodeList"
            :spanInputs="ReasonCodeDropDown.inputSpan"
            :spanLabels="ReasonCodeDropDown.labelSpan"
            name="ReasonCodeDropDown"
            v-if="configObject.ReasonCodeDropDown.isVisible"
          />
        </el-col>
        <el-col :md="12" :lg="12">
          <ReasonDescriptionTextArea
           @ReasonDescriptionTextArea-onBlur="
              (val) => {
                $emit('ReasonDescriptionTextArea-onBlur', val);
              }
            "
            @ReasonDescriptionTextArea-onKeyUp="(val) => {
                $emit('ReasonDescriptionTextArea-onKeyUp', val);
              }"
            :colorinput="configObject.ReasonDescriptionTextArea.inputColor"
            :colorLabel="configObject.ReasonDescriptionTextArea.labelColor"
            :isDisable="configObject.ReasonDescriptionTextArea.isDisabled"
            :values="
              configObject.ReasonDescriptionTextArea.reasonDescriptionValue
            "
            :maxRows="ReasonDescriptionTextArea.maxRows"
            :minRows="ReasonDescriptionTextArea.minRows"
            :spanInputs="ReasonDescriptionTextArea.inputSpan"
            :spanLabels="ReasonDescriptionTextArea.labelSpan"
            name="ReasonDescriptionTextArea"
            v-if="configObject.ReasonDescriptionTextArea.isVisible"
          />
        </el-col>
      </el-row>
    </fieldset>
    <br />
    <el-row>
      <el-col :md="2" :lg="2">
        <ContinueButton
          @ContButton-onClick="$emit('ContButton-onClick')"
          :isDisable="configObject.ContinueButton.isDisabled"
          :nativeType="ContinueButton.nativeType"
          :spanInputs="ContinueButton.inputSpan"
          name="ContinueButton"
          v-if="configObject.ContinueButton.isVisible"
        />
      </el-col>
      <el-col :md="20" :lg="20"></el-col>
      <el-col :md="2" :lg="2">
        <BackButton
          @BackButton-onClick="$emit('BackButton-onClick')"
          :isDisable="configObject.BackButton.isDisabled"
          :nativeType="BackButton.nativeType"
          :spanInputs="BackButton.inputSpan"
          name="BackButton"
          v-if="configObject.BackButton.isVisible"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <CustomButton/>
      </el-col>
    </el-row>
  </Form>
</template>
<script>
import { reactive, ref } from "vue";
import { Form, useForm } from "vee-validate";
// import ExceptionTable from "../lib-components/exception-table/exception-table.vue";
import ReasonCodeDropDown from "../lib-components/reason-code-drop-down/reason-code-drop-down.vue";
// import ReasonDescriptionTextArea from "../lib-components/reason-description-text-area/reason-description-text-area.vue";
import ContinueButton from "../lib-components/cont-button/cont-button.vue";
// import BackButton from "../lib-components/back-button/back-button.vue";
import { CustomButton, BackButton, ReasonDescriptionTextArea, ExceptionTable } from "../js/test-npm-package.common"
export default {
  name: "SuperSet5",
  components: {
    Form,
    ExceptionTable,
    ReasonCodeDropDown,
    ReasonDescriptionTextArea,
    ContinueButton,
    BackButton,
    CustomButton
  },
  props: {
    //Add configuration object details
    configObj: {},
  },
  setup(props, { emit }) {
    useForm();
    function onSubmit(values) {
      emit("onSubmit", values);
    }

    const configObject = reactive({
      title: props.configObj,
      ExceptionTable: props.configObj.componentProps.ExceptionTable,
      ReasonCodeDropDown: props.configObj.componentProps.ReasonCodeDropDown,
      ReasonDescriptionTextArea:
        props.configObj.componentProps.ReasonDescriptionTextArea,
      ContinueButton: props.configObj.componentProps.ContinueButton,
      BackButton: props.configObj.componentProps.BackButton,
      Section1: props.configObj.componentProps.Section1,
    });

    return {
      onSubmit,
      configObject,
      ExceptionTable: {
        inputSpan: ref(24),
        labelSpan: ref(0),
        tableHeight: ref(300),
        tableWidth: ref("100"),
      },
      ReasonCodeDropDown: {
        inputSpan: ref(15),
        labelSpan: ref(6),
      },
      ReasonDescriptionTextArea: {
        inputSpan: ref(16),
        labelSpan: ref(7),
        minRows: ref(2),
        maxRows: ref(2),
      },
      ContinueButton: {
        inputSpan: ref(24),
        nativeType: "submit",
      },
      BackButton: {
        inputSpan: ref(24),
        nativeType: "button",
      },
    };
  },
};
</script>