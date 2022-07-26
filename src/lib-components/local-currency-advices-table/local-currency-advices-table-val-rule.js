
/**
 * @author Ibrahim Ajmal
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */

import * as yup from "yup";




var ValidationObject = {
    label: "",  // Label of the component must be declared here and cannot be changed in the screen or use case. You can also set label as null.
    isDisabled: false,  //* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    /* The attribute "tableColomns" is used to display all the columns present ion the table. It is to be noted that all columns name must be written in this file that are to be visible on the screen must be written here.*/
    tableColumns: [
        {            
            prop: 'resp_brn',
            label: 'Resp. Brn.',
            align:'left',
            columnsWidth:'120%',
        },
        {
            prop: 'post_by',
            label: 'Post By',
            align:'left',
            columnsWidth:'150%',
        },
        {
            prop: 'instrument_no',
            label: 'Instrument No.',
            align:'left',
            columnsWidth:'200%',
        },
        {
            prop: 'date',
            label: 'Date',
            align:'left',
            columnsWidth:'150%',
        },

        {
            prop: 'ccy',
            label: 'CCY',
            align:'left',
            columnsWidth:'100%',
        },
        {
            prop: 'amount',
            label: 'Amount',
            align:'right',
            columnsWidth:'160%',
        },
        {            
            prop: 'status',
            label: 'Status',
            align:'left',
            columnsWidth:'120%',
        },
        {            
            prop: 'o_r_branch',
            label: 'O_R Branch',
            align:'left',
            columnsWidth:'120%',
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
    colorInput: 'black',
    fontFamilyInput: 'Arial',
    fontWeightInput: 'bold',
    fontSizeInput: '15px',
    spanInput: 15,

}
var regEx;
var formSchema;



export { ValidationObject, formSchema, Style };
