
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
            prop: 'reference_no_transaction_no',
            label: 'Tran / Ref No. ',
            align: 'left',
            columnsWidth:'220%'
        },
        {
            prop: 'tran_cd',
            label: 'Tran. Code',
            align: 'left',
            columnsWidth:'120%'
        },
        {
            prop: 'transaction_desc',
            label: 'Transaction Desc.',
            align: 'left',
            columnsWidth:'250%'
        },
        {
            prop: 'AC_no',
            label: 'A/C No.',
            align: 'left',
            columnsWidth:'280%'
        },
        {
            prop: 'currency',
            label: 'CCY',
            align: 'left',
            columnsWidth:'280%'
        },
        {
            prop: 'amount',
            label: 'Amount',
            align: 'right',
            columnsWidth:'180%'
        },
        {
            prop: 'user_id',
            label: 'User Id',
            align: 'left',
            columnsWidth:'180%'
        },
        {
            prop: 'auth_by',
            label: 'Auth by',
            align: 'left',
            columnsWidth:'180%'
        },
        {
            prop: 'transaction_status',
            label: 'Status',
            align: 'left',
            columnsWidth:'200%'
        },
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