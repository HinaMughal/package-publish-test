
/**
 * @author Ibrahim Ajmal
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";






var ValidationObject = {
    label: "Data Table",  // Label of the component must be declared here and cannot be changed in the screen or use case. You can also set label as null.
    isDisabled: false,  //* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    /* The attribute "tableColomns" is used to display all the columns present ion the table. It is to be noted that all columns name must be written in this file that are to be visible on the screen must be written here.*/
    tableColumns: [{            
            prop: 'reference',
            label: 'Reference',
            align: 'left',
            columnsWidth:'110%'
        },
        {
            prop: 'tran_code',
            label: 'Tran Code',
            align: 'left',
            columnsWidth:'110%'
        },
        {
            prop: 'account_no',
            label: 'Account No.',
            align: 'left',
            columnsWidth:'210%'
        },
        {
            prop: 'ac_title',
            label: 'A/C Title',
            align: 'right',
            columnsWidth:'210%'
        },
        {
            prop: 'ccy',
            label: 'CCY',
            align: 'left',
            columnsWidth:'80%'
        },
        {
            prop: 'instrument_no',
            label: 'Inst No.',
            align: 'left',
            columnsWidth:'100%'
        },
        {
            prop: 'dr',
            label: 'DR',
            align: 'right',
            columnsWidth:'120%'
        },
        {
            prop: 'cr',
            label: 'CR',
            align: 'right',
            columnsWidth:'120%'
        },
    ]
};




var Style = {
    //////Label///////
    colorLabel: 'black',
    fontFamilyLabel: 'Arial',
    fontWeightLabel: 'bold',
    fontSizeLabel: '24px',
    spanLabel: 2,
    ///////Input/////
    spanInput: 4,

}
var regEx;
var formSchema;



export { ValidationObject, formSchema, Style };