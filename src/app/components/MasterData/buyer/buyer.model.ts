export class Model_Buyer {
    PID: null | number;
    Buyer_Code: null | string;
    Buyer_Name: null | string;
    Address: null | string;
    Address2: null | string;
    Address3: null | string;
    Address4: null | string;
    Address5: null | string;
    Mobile_Number: null | number;
    City: null | string;
    Country: null | string;
    Email: null | string;
    State: null | string;
    PIN_Code: null | string;
    Model_contact: any[] = [];
    Bank_Name: null | string;
    IFSC_Code: null | string;
    AC_Number: null | number;
    Action: string = 'INST';
    Image: any;
    PhotoName :any;
}

export class Model_contact {
    Contact_Person_Name: null | string;
    Contact_Person_Designation: null | string;
    Conatct_Person_Contact_No: null | string;
}


