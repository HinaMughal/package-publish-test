
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
            prop: 'local_branch',
            label: 'Local Branch',
            align:'left',
            columnsWidth:'150%',
        },
        {
            prop: 'trans_from_acc',
            label: 'Trans From Acc',
            align:'left',
            columnsWidth:'210%',
        },
        {
            prop: 'trans_to_acc',
            label: 'Trans To Acc',
            align:'left',
            columnsWidth:'210%',
        },
        {
            prop: 'amount',
            label: 'Amount',
            align:'right',
            columnsWidth:'150%',
        },
        {
            prop: 'post_by',
            label: 'Post By',
            align:'left',
            columnsWidth:'150%',
        },
        {
            prop: 'status',
            label: 'Status',
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