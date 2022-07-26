
/**
 * @author Farhan(Shahid Hussain)
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";



var ValidationObject = {
    mandatory: true, //Used for mandatory fields
    toolTip: "Activity", //Tool tip text
    label: "Activity", // Label of the component must be declared here and cannot be changed in the screen or use case.
    isDisabled: false, //* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
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
var formSchema;



if (ValidationObject.mandatory == true) {
    formSchema = yup.string().required("Field is required");
}

export { ValidationObject, formSchema, Style };