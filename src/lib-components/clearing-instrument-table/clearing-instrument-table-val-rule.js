
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
            prop: 'paying_bank',
            label: 'Paying Bank',
            align:'left',
            columnsWidth:'180%',
        },
        {
            prop: 'paying_branch',
            label: 'Paying Branch',
            align:'left',
            columnsWidth:'210%',
        },
        {
            prop: 'inst_no',
            label: 'Inst. No.',
            align:'left',
            columnsWidth:'130%',
        },
        {
            prop: 'inst_date',
            label: 'Inst. Date',
            align:'left',
            columnsWidth:'130%',
        },
        {
            prop: 'amount',
            label: 'Amount',
            align:'right',
            columnsWidth:'130%',
        },
        {
            prop: 'value_date',
            label: 'Value Date',
            align:'left',
            columnsWidth:'130%',
        },
        {
            prop: 'narration_1',
            label: 'Narr. 1',
            align:'left',
            columnsWidth:'160%',
        },
        {
            prop: 'narration_2',
            label: 'Narr. 2',
            align:'left',
            columnsWidth:'160%',
        },
        {
            prop: 'narration_3',
            label: 'Narr. 3',
            align:'left',
            columnsWidth:'160%',
        },
        {
            prop: 'narration_4',
            label: 'Narr. 4',
            align:'left',
            columnsWidth:'160%',
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