
/**
 * @author Name
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";





var ValidationObject = {
    label: "Remove", // Label of the component must be declared here and cannot be changed in the screen or use case.
    isDisabled: false, //* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    buttonType:'button' // Possible Types are (button,submit,reset)
};




var Style = {
    spanButton: 2,
    fontFamilyLabel: 'Arial',
    fontWeightLabel: 'bold', // possible values are "bold, bolder" or ''
    fontSizeLabel: '15px',
    height: '90%',
    width: '100%'

}

var regEx;
var formSchema;



export { ValidationObject, formSchema, Style };