
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
            prop: 'waiver_no',
            label: 'Waiver No',
            align: 'left',
            columnsWidth:'150%'
        },
        {
            prop: 'sr_no',
            label: 'Sr No',
            align: 'left',
            columnsWidth:'80%'
        },
        {
            prop: 'date',
            label: 'Date',
            align: 'left',
            columnsWidth:'150%'
        },
        {
            prop: 'voucher_no',
            label: 'Voucher No',
            align: 'right',
            columnsWidth:'200%'
        },
        {
            prop: 'cust_account',
            label: 'Cust Account',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'cust_account_title',
            label: 'Customer Account Title',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'activity',
            label: 'Activity',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'doc_no',
            label: 'Doc No.',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'def_amt',
            label: 'Def Amt.',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'charged_amt',
            label: 'Charged Amt.',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'cust_setup_amt',
            label: 'Cust.Setup Amt.',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'post_by',
            label: 'Post By',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'gl_account_title',
            label: 'GL Account Title',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'GL_account',
            label: 'GL Account',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'batch_status',
            label: 'Batch Status',
            align: 'left',
            columnsWidth:'200%'
        },
        {
            prop: 'waiving_remarks',
            label: 'Waiving Remarks',
            align: 'left',
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