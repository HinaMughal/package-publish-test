
/**
 * @author Ibrahim Ajmal
 * @version 0.0.1
 * Description of the component's validation. Write all validations on separate lines. For example
 */



var ValidationObject = {
    label: "",  // Label of the component must be declared here and cannot be changed in the screen or use case. You can also set label as null.
    isDisabled: false,  //* if component is required to be displayed as disabled then this field must be true. Disabled proporty can be changed from the screen.*/
    /* The attribute "tableColomns" is used to display all the columns present ion the table. It is to be noted that all columns name must be written in this file that are to be visible on the screen must be written here.*/

    tableColumns: [
        {
            prop: 'branch',
            label: 'Branch',
            align: 'left',
            columnsWidth: '200%',
        },
        {
            prop: 'voucher_no',
            label: 'Vouch No.',
            align: 'left',
            columnsWidth: '150%',
        },
        {
            prop: 'ref_no',
            label: 'Tran No./Ref No.',
            align: 'left',
            columnsWidth: '130%',
        },
        {
            prop: 'tran_code',
            label: 'Tran Code',
            align: 'left',
            columnsWidth: '130%',
        },
        {
            prop: 'inst_no',
            label: 'Inst No.',
            align: 'left',
            columnsWidth: '130%',
        },
        {
            prop: 'account_no',
            label: 'Account No.',
            align: 'left',
            columnsWidth: '210%',
        },
        {
            prop: 'account_title',
            label: 'A/C Title',
            align: 'left',
            columnsWidth: '210%',
        },
        {
            prop: 'ccy',
            label: 'CCY',
            align: 'left',
            columnsWidth: '80%',
        },
        {
            prop: 'dr',
            label: 'DR',
            align: 'right',
            columnsWidth: '150%',
        },
        {
            prop: 'cr',
            label: 'CR',
            align: 'right',
            columnsWidth: '150%',
        },
        // {
        //     prop:"transactionSerialNumber",
        //     columnsWidth:"1%"
        // }
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
var formSchema;



export { ValidationObject, formSchema, Style };
