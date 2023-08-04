export class Model_FinishedGoods {
    PID: null | number;
    Item_code: string;
    Old_Item_code: string;
    Sample_Item_Code: string;
    Item_name: string = '';
    Sub_Item_name1: string = '';
    Sub_Item_name2: string = '';
    Sub_Item_name3: string = '';
    Sub_Item_name4: string = '';
    Photo_Path: string = '';
    Bar_Code_name: string = '';
    Item_Group_PID: null | number;
    Item_Sub_Group_PID: null | number;
    Item_Category_PID: null | number;
    Item_Sub_Category_PID: null | number;
    Brand_PID: null | number;
    Color_Finish_PID: null | number;
    MinimumQuantity: string = '0';
    Action: string = 'INST';
}
