
/**
 * @author Mohsin Ali|Mirza Ehtisham Danish
 * @version 0.0.1
 * This text box is used to enter time.
 * 
 * Validation 
    - Field is numericSpecial
    - Masking for this field is (HH:MM:SS)
 */

import * as yup from "yup";


var ValidationObject = {
    mandatory: true, //Ture if field is mandatory
    mask: "##:##:##", //Leave empty for no mask e.g (""), # for numbers ("#") 
    dataType: 'numericSpecial', //Data Types can be of these types "alphaNumeric, numeric, alphabetOnly, alphaNumericSpecial, date, alphaSpecial , numericSpecial , numericDecimal"
    decimalValue: 2, //To be used with numeric dataType. Describes number of decimal places to be used
    minLength: false, //Used for minimum length restriction. If true then min value must be given.
    minLengthVal: null, //Value to be used for minLength.
    maxLength: true, //Used for maximum length restriction. This field must be true for all the components.
    maxLengthVal: 8 , //Value to be used for maxLength
    placeHolder: "HH:MM:SS", //Placeholder text to be displayed within the textbox
    toolTip: "HH:MM:SS", //Tool tip text
    label: "Time ", // Label of the component must be declared here and cannot be changed in the screen or use case.
    isDisabled: true,  /* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    isDisabledTooltip:true
};







var Style ={
    //////Label///////
    colorLabel:'black',
    fontFamilyLabel:'Arial',
    fontWeightLabel:'', // possible values are "bold, bolder" or ''
    fontSizeLabel:'24px',
    spanLabel:2,
    ///////Input/////
    colorInput:'black',
    fontFamilyInput:'Arial',
    fontWeightInput:'bold', // possible values are "bold, bolder" or ''
    fontSizeInput:'15px',
    spanInput:4,
    textAlign:'left', //(right,center,left)

}
var regEx;
var formSchema;


if (ValidationObject.dataType == "date") {
    regEx = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    formSchema = yup.string().matches(regEx, "Date is incorrect");
} else if (ValidationObject.dataType == "alphabetOnly") {
    regEx = /^[a-zA-Z ]*$/
    formSchema = yup.string().matches(regEx, "Alphabets are only allowed");
} else if (ValidationObject.dataType == "alphaNumeric") {
    regEx = /^[a-zA-Z0-9]*$/
    formSchema = yup.string().matches(regEx, "Field only allows alphabets and numeric values");
} else if (ValidationObject.dataType == "alphaNumericSpecial") {
    regEx = /^[a-zA-Z0-9 _\-@#*$&%!^<>,./]+$/
    formSchema = yup.string().matches(regEx, "Data is incorrect");
} else if (ValidationObject.dataType == "alphaSpecial") {
    regEx = /^[a-zA-Z _\-@#*$&%!^<>,./]+$/
    formSchema = yup.string().matches(regEx, "Field only allows alphabets and special characters");
} else if (ValidationObject.dataType == "numeric") {
    regEx = /^[0-9]+$/
    formSchema = yup.string().matches(regEx, "Field only allows numeric values");
} else if (ValidationObject.dataType == "numericSpecial") {
    regEx = /^[0-9 _\-@#*$&%!^<>,.:/]*$/;
    formSchema = yup.string().matches(regEx, "Field only allows numeric and special characters");
} else if (ValidationObject.dataType == "numericDecimal") {
    var exp1 = "^[0-9]+(?:[.][0-9]{1,";
    var exp2='})?$';
    regEx = new RegExp(exp1+ValidationObject.decimalValue+exp2)
    formSchema = yup.string().matches(regEx, "Field only allows decimal values");
}
if (ValidationObject.minLength) {
    formSchema = formSchema.min(ValidationObject.minLengthVal, "Length must be at least " + ValidationObject.minLengthVal + " characters")
}
if (ValidationObject.maxLength) {
    formSchema = formSchema.max(ValidationObject.maxLengthVal, "Length must be at most " + ValidationObject.maxLengthVal + " characters")
}



if (ValidationObject.mandatory == true) {
    formSchema = formSchema.required("Field is required");
}

export { ValidationObject, formSchema, Style };