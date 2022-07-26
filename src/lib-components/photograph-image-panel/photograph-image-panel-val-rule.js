
/**
 * @author Izza Zaheer (Ibrahim)
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";







var ValidationObject = {

    toolTip: "Photograph", //Tool tip text
    label: "Photograph", // Label of the component must be declared here and cannot be changed in the screen or use case.
    isDisabledTooltip:true

};

var Style = {
//////Label///////
    colorLabel: 'black',
    fontFamilyLabel: 'Arial',
    fontWeightLabel: 'bold', // possible values are "bold, bolder" or ''
    fontSizeLabel: '24px',
    spanLabel: 2,
    spanImage: 12,

/* size of image component to be displayed on the screen*/
    height: '150px',
    width: '150px'
}

var regEx;
var formSchema;



export { ValidationObject, formSchema, Style };