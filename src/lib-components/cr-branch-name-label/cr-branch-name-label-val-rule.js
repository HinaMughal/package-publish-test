/**
 * @author Siddiqui (Ibrahim)
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";

var ValidationObject = {
  label: "CR Branch Name", // Label of the component must be declared here and cannot be changed in the screen or use case.
};

var Style = {
  //////Label///////
  colorLabel: "black",
  fontFamilyLabel: "Arial",
  fontWeightLabel: "", // possible values are "bold, bolder" or ''
  fontSizeLabel: "24px",
  spanLabel: 2,
};

var regEx;
var formSchema;

export { ValidationObject, formSchema, Style };
