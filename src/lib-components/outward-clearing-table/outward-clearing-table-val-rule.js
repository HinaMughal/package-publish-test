
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
    tableColumns: [{            
            prop: 'source_branch',
            label: 'Source Branch',
            align:'left',
            columnsWidth:'180%',
        },
        {
            prop: 'target_branch',
            label: 'Target Branch',
            align:'left',
            columnsWidth:'180%',
        },
        {
            prop: 'post_date',
            label: 'Post Date',
            align:'left',
            columnsWidth:'150%',
        },
        {
            prop: 'voucher',
            label: 'Voucher',
            align:'left',
            columnsWidth:'180%',
        },
        {
            prop: 'ref_no',
            label: 'Ref No/Tran No.',
            align:'left',
            columnsWidth:'120%',
        },
        {
            prop: 'depositor_account_no',
            label: 'Depositor A/C No.',
            align:'left',
            columnsWidth:'210%',
        },
        {
            prop: 'inst_no',
            label: 'Inst No',
            align:'left',
            columnsWidth:'120%',
        },
        {
            prop: 'status',
            label: 'Status',
            align:'left',
            columnsWidth:'150%',
        },
        {
            prop: 'post_by',
            label: 'Post By',
            align:'left',
            columnsWidth:'150%',
        },
        {
            prop: 'auth_by',
            label: 'Auth By',
            align:'left',
            columnsWidth:'150%',
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
    spanInput: 15,

}
var regEx;
var formSchema;



export { ValidationObject, formSchema, Style };