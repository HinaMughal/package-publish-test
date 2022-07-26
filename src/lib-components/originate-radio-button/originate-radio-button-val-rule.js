
/**
 * @author Zeeshan Masood (Ibrahim)
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";


var ValidationObject = {
    mandatory: true, //Ture if field is mandatory
    toolTip: "Radio Btn", //Tool tip text
    label: "Originate", // Label of the component must be declared here and cannot be changed in the screen or use case.
    isDisabled: false, /* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    /* This attribute is used to group the multiple radio buttons. This attribute has further two sub attributes, i.e., label and value. It is to be noted that all radio buttons that are to be visible on the screen
        must be written here.*/
    radioGroup: [{   
            value: 'ibca',
            label: "IBCA"
        },
        {
            value: 'ibda',
            label: "IBDA"
        },

    ],
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
    textAlign:'right', //(right,center,left)

}
var regEx;
var formSchema;



if (ValidationObject.mandatory == true) {
    formSchema = yup.string().required("Field is required");
}

export { ValidationObject, formSchema, Style };