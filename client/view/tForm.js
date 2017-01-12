AutoForm.hooks({
    testInsertForm: {
        onSubmit: function(doc){
            this.event.preventDefault();
            Person.insert(doc);
            console.log('onSubmit testInsertForm called');
            //this.done();
            return false;
        }
    }
});

// Template.testInsertForm.events({
//     'click #btnSubmit': function (e){
//         e.preventDefault();
//         console.log("submit TIF button pressed");
//         console.log("lastName " + AutoForm.getFieldValue('lastName') );
//     }
//
// });


Person.attachSchema(new SimpleSchema({
    lastName: {
        label: "Last Name",
        type: String,
        autoform: {
            group: person,
            type: 'text'
        }
    },

    firstName: {
        label: "First Name",
        type: String,
        autoform: {
            group: person,
            type: 'text'
        }
    },

    middleName: {
        label: "Middle Name",
        type: String,
        autoform: {
            group: person,
            type: 'text'
        }
    },

    referral: {
        label: "How did you know about us?",
        type: String,
        allowedValues: ['Facebook', 'Word of Mouth', 'Referred by a friend'],
        optional: true,
        autoform: {
            group: person,
            type: 'select'
        }
    },

    age: {
        label: "Age",
        type: Number,
        allowedValues: [18,19,20],
        autoform: {
            group: person,
            type: 'select'
        }
    },

    dateOfBirth: {
        label: "Date of Birth",
        type: Date,
        autoform: {
            group: person,
            type: 'date'
        }
    },

    gender: {
        label: "Gender",
        type: String,
        allowedValues: ['Male', 'Female'],
        autoform: {
            group: person,
            type: 'select'
        }
    },

    bIllness: {
        label: "Any previous illness?",
        type: String,
        allowedValues: ["no","yes"]
    },

    illness: {
        label: "please indicate",
        type: [String],
        optional: true,
        allowedValues: ['Diabetes', 'Cancer', 'Back Pain', 'Stroke', 'Hypertension', 'Others']
    },

    strIllness: {
        label: "please specify",
        type: String,
        optional: true,
    },

    spouse: {
      type: Object
    },

    "spouse.name": {
        label: "Name of spouse",
        type: String,
        autoform: {
            group: person,
            type: 'text'
        }
    },

    "spouse.DOB": {
        label: "Birthdate",
        type: Date,
        autoform: {
            group: person,
            type: 'date'
        }

    },

    "spouse.address": {
        label: "Address",
        type: String,
        autoform: {
            group: person,
            type: 'text'
        }
    },

    "spouse.contactNo": {
        label: "Contact No",
        type: Number,
        autoform: {
            group: person,
            type: 'text'
        }
    }

}));

/*

basicInfo ="BasicInfo";
BasicInfo = new Mongo.Collection(basicInfo);
BasicInfo.attachSchema(new SimpleSchema({
    controlNo: {
        label: "Control No.",
        type: String,
        autoform: {
            group: basicInfo
        }
    },

    jobPositionApplied: {
        label: "Position Applied For",
        type: String,
        allowedValues: ['Sous Chef','Engine Repairman','Laundryman'],
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },

    dateApplied: {
        label: "Date Applied",
        type: Date,
        autoform: {
            group: basicInfo,
            type: 'date'
        }
    },

    lastName: {
        label: "Last Name",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    firstName: {
        label: "First Name",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    middleName: {
        label: "Middle Name",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    referral: {
        label: "How did you know about us?",
        type: String,
        allowedValues: ['Facebook', 'Word of Mouth', 'Referred by a friend'],
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },

    /!***
     *
     * Personal Background
     *
     *!/

    age: {
        label: "Age",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },

    dateOfBirth: {
        label: "Date of Birth",
        type: Date,
        autoform: {
            group: basicInfo,
            type: 'date'
        }
    },

    placeOfBirth: {
        label: "Place of Birth",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    civilStatus: {
        label: "Civil Status",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },

    height: {
        label: "Height",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    weight: {
        label: "Weight",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    gender: {
        label: "Gender",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },

    email: {
        label: "Email",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    cityAddress: {
        label: "City Address",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    zipCode: {
        label: "Zip Code",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    telNo: {
        label: "Tel. No.",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    sssNo: {
        label: "SSS No.",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    pagibig: {
        label: "Pag-Ibig",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    philhealth: {
        label: "Philhealth",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    nbi: {
        label: "NBI",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    dateIssued: {
        label: "Date Issued",
        type: Date,
        autoform: {
            group: basicInfo,
            type: 'date'
        }
    },


    /!***
     *
     * Educational Background
     *
     *!/



    /!***
     *
     * Past Employment
     *
     *!/

    /!***
     *
     * Licenses
     *
     *!/

    /!***
     *
     * Visa Information
     *
     *!/

    embassy: {
        label: "Have you ever been denied any VISA Applications? If yes, please indicate which Embassy and date of application",
        type: String,
        allowedValues: ['USA','Korea','Japan'],
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },

    dateOfVisaApplication: {
        label: "Date of Application",
        type: Date,
        autoform: {
            group: basicInfo,
            type: 'date'
        }
    },

    countryPetitioned: {
        label: "Have you ever been petitioned before? if yes which country?",
        type: String,
        allowedValues: ['USA','Japan'],
        autoform: {
            group: basicInfo,
            type: 'select'
        }
    },


    /!***
     *
     * Training Certificate
     *
     *!/

    /!***
     *
     * Family Information
     *
     *!/

    "spouse.name": {
        label: "Name of spouse",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    "spouse.DOB": {
        label: "Birthdate",
        type: Date,
        autoform: {
            group: basicInfo,
            type: 'date'
        }

    },

    "spouse.address": {
        label: "Address",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    "spouse.contactNo": {
        label: "Contact No",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    placeholder: {
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },


    child: {
        label: "Children",
        type: Array,
        optional: true,
        minCount: 0,
        maxCount: 20
    },

    "child.$": {
        type: Object
    },

    "child.$.name": {
        label: "Name",
        type: String
    },

    "child.$.DOB": {
        label: "Date of Birth",
        type: Date
    },

    "father.name": {
        label: "Name",
        type: String
    },

    "father.DOB": {
        label: "Birthdate",
        type: Date
    },

    "father.POB": {
        label: "Birthplace",
        type: String
    },

    "mother.name": {
        label: "Name",
        type: String
    },

    "mother.DOB": {
        label: "Birthdate",
        type: Date
    },

    "mother.POB": {
        label: "Birthplace",
        type: String
    },

    "beneficiary.name": {
        label: "Name",
        type: String
    },

    "beneficiary.DOB": {
        label: "Birthdate",
        type: Date
    },

    "beneficiary.address": {
        label: "Address",
        type: String
    },

    "beneficiary.contactNo": {
        label: "Contact No",
        type: Number
    },

    "emergencyContactPerson.name": {
        label: "Name",
        type: String
    },

    "emergencyContactPerson.relationship": {
        label: "Relationship",
        type: String
    },

    "emergencyContactPerson.address": {
        label: "Address",
        type: String
    },

    "emergencyContactPerson.contactNo": {
        label: "Contact No",
        type: Number
    },

    /!***
     *
     * Medical History
     *
     *!/

    bRepatriated: {
        label: "Have you ever been repatriated before?",
        type: String,
        allowedValues: ["no","yes"]
    },

    repatriated: {
        label: "state reason",
        type: String
    },

    bSurgery: {
        label: "Any previous surgery?",
        type: String,
        allowedValues: ["no","yes"]
    },

    surgery: {
        label: "please describe",
        type: String
    },

    bIllness: {
        label: "Any previous illness?",
        type: String,
        allowedValues: ["no","yes"]
    },

    illness: {
        label: "please indicate",
        type: [String],
        allowedValues: ['Diabetes', 'Cancer', 'Back Pain', 'Stroke', 'Hypertension', 'Others']
    },

    strIllness: {
        label: "please specify",
        type: String
    },

    bDrugProblem: {
        label: "Any drug problem?",
        type: String,
        allowedValues: ["no","yes"]
    },

    bAlcoholProblem: {
        label: "Any alcohol problem?",
        type: String,
        allowedValues: ["no","yes"]
    },

    alcoholProblem: {
        label: "how often and how much?",
        type: String
    },

    bSmoke: {
        label: "Do you smoke?",
        type: String,
        allowedValues: ["no","yes"]
    },
    smoke: {
        label: "how many sticks a day?",
        type: String
    },

    bSkinAllergies: {
        label: "Do you have skin allergies?",
        type: String,
        allowedValues: ["no","yes"]
    },


    bSkinDisease: {
        label: "Have you ever been treated with skin disease?",
        type: String,
        allowedValues: ["no","yes"]
    },

    bTattoo: {
        label: "Do you have any visible tattoo?",
        type: String,
        allowedValues: ["no","yes"]
    },

    tattoo: {
        label: "where is it located",
        type: String
    },

    /!***
     *
     * Character References
     *
     *!/

    characterRef: {
        label: " ",
        type: Array,
        optional: false,
        minCount: 0,
        maxCount: 5
    },

    "characterRef.$": {
        type: Object
    },

    "characterRef.$.name": {
        label: "Name",
        type: String
    },

    "characterRef.$.address": {
        label: "Address",
        type: String
    },

    "characterRef.$.contactNo": {
        label: "Contact No",
        type: String
    }


}));

*/
