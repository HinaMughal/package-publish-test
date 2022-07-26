
/**
 * @author Name
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";






var ValidationObject = {
    label: "Data Table",  // Label of the component must be declared here and cannot be changed in the screen or use case. You can also set label as null.
    isDisabled: false,  //* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    /* The attribute "tableColomns" is used to display all the columns present ion the table. It is to be noted that all columns name must be written in this file that are to be visible on the screen must be written here.*/
    tableColumns: [{            
            prop: 'currency',
            label: 'Currency',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'difference',
            label: 'Difference',
            align: 'right',
            columnsWidth:'100%'
        },
        {
            prop: 'cash_dr',
            label: 'Cash Dr',
            align: 'right',
            columnsWidth:'200%'
        },
        {
            prop: 'cash_cr',
            label: 'Cash Cr',
            align: 'right',
            columnsWidth:'200%'
        },
        {
            prop: 'clear_dr',
            label: 'Clear Dr',
            align: 'right',
            columnsWidth:'200%'
        },
        {
            prop: 'clear_cr',
            label: 'Clear Cr',
            align: 'right',
            columnsWidth:'200%'
        },
        {
            prop: 'trf_dr',
            label: 'Trf Dr',
            align: 'right',
            columnsWidth:'200%'
        },
        {
            prop: 'trf_cr',
            label: 'Trf Cr',
            align: 'right',
            columnsWidth:'200%'
        }
    ]
};




var Style = {
    //////Label///////
    colorLabel: 'black',
    fontFamilyLabel: 'Arial',
    fontWeightLabel: 'bold',
    fontSizeLabel: '24px',
    spanLabel: 0,
    ///////Input/////
    spanInput: 24,

}
var regEx;
var formSchema;



export { ValidationObject, formSchema, Style };