applicant = "Applicant";
Applicant = new Mongo.Collection(applicant);

Applicant.attachSchema(new SimpleSchema({
    controlNo: {
        label: "Control No.",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    jobPositionApplied: {
        label: "Position Applied For",
        type: String,
        autoform: {
            group: applicant,
            type: 'select'
        }
    },

    dateApplied: {
        label: "Date Applied",
        type: Date,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    lastName: {
        label: "Last Name",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    firstName: {
        label: "First Name",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    middleName: {
        label: "Middle Name",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    referral: {
        label: "How did you know about us?",
        type: String,
        allowedValues: ['Facebook', 'Word of Mouth', 'Referred by a friend'],
        autoform: {
            group: applicant,
            type: 'select'
        }
    },


    /***
     *
     * Personal Background
     *
     */

    age: {
        label: "Age",
        type: Number,
        optional: true,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    dateOfBirth: {
        label: "Date of Birth",
        type: Date,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    placeOfBirth: {
        label: "Place of Birth",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    civilStatus: {
        label: "Civil Status",
        type: String,
        autoform: {
            group: applicant,
            type: 'select'
        }
    },

    height: {
        label: "Height (cm)",
        type: Number,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    weight: {
        label: "Weight (lbs)",
        type: Number,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    gender: {
        label: "Gender",
        type: String,
        autoform: {
            group: applicant,
            type: 'select'
        }
    },

    email: {
        label: "Email",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    cityAddress: {
        label: "City Address",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    zipCode: {
        label: "Zip Code",
        type: Number,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    telNo: {
        label: "Tel. No.",
        type: Number,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    sssNo: {
        label: "SSS No.",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    pagibig: {
        label: "Pag-Ibig",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    philhealth: {
        label: "Philhealth",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    nbi: {
        label: "NBI",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    dateIssued: {
        label: "Date Issued",
        type: Date,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },


    /***
     *
     * Educational Background
     *
     */

    hsName: {
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    hsPeriodFrom: {
        type: Date,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    hsPeriodTo: {
        type: Date,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    collegeName: {
        type: String,
        optional: true,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    collegeCourse: {
        type: String,
        optional: true,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    collegePeriodFrom: {
        type: Date,
        optional: true,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    collegePeriodTo: {
        type: Date,
        optional: true,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    graduateSchoolName: {
        type: String,
        optional: true,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    graduateSchoolCourse: {
        type: String,
        optional: true,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    graduateSchoolPeriodFrom: {
        type: Date,
        optional: true,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    graduateSchoolPeriodTo: {
        type: Date,
        optional: true,
        autoform: {
            group: applicant,
            type: 'date'
        }
    },

    //
    //
    // /***
    //  *
    //  * Past Employment
    //  *
    //  */
    //
    // /***
    //  *
    //  * Licenses
    //  *
    //  */
    //
    // /***
    //  *
    //  * Visa Information
    //  *
    //  */
    //
    // embassy: {
    //     label: "Have you ever been denied any VISA Applications? If yes, please indicate which Embassy and date of application",
    //     type: String,
    //     allowedValues: ['USA','Korea','Japan'],
    //     autoform: {
    //         group: applicant,
    //         type: 'select'
    //     }
    // },
    //
    // dateOfVisaApplication: {
    //     label: "Date of Application",
    //     type: Date,
    //     autoform: {
    //         group: applicant,
    //         type: 'date'
    //     }
    // },
    //
    // countryPetitioned: {
    //     label: "Have you ever been petitioned before? if yes which country?",
    //     type: String,
    //     allowedValues: ['USA','Japan'],
    //     autoform: {
    //         group: applicant,
    //         type: 'select'
    //     }
    // },
    //
    //
    // /***
    //  *
    //  * Training Certificate
    //  *
    //  */
    //

    // placeholder: {
    //     type: String,
    //     autoform: {
    //         group: applicant,
    //         type: 'text'
    //     }
    // },

    /***
     *
     * Family Information
     *
     */

    "spouse.name": {
        label: "Name of spouse",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    "spouse.DOB": {
        label: "Birthdate",
        type: Date,
        autoform: {
            group: applicant,
            type: 'date'
        }

    },

    "spouse.address": {
        label: "Address",
        type: String,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },

    "spouse.contactNo": {
        label: "Contact No",
        type: Number,
        autoform: {
            group: applicant,
            type: 'text'
        }
    },


    child: {
        label: "Children",
        type: [Object],
        optional: true,
        minCount: 0
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

    /***
     *
     * Medical History
     *
     */

    bRepatriated: {
        label: "Have you ever been repatriated before?",
        type: String,
        allowedValues: ["no","yes"]
    },

    repatriated: {
        label: "state reason",
        optional: true,
        type: String
    },

    bSurgery: {
        label: "Any previous surgery?",
        type: String,
        allowedValues: ["no","yes"]
    },

    surgery: {
        label: "please describe",
        optional: true,
        type: String
    },

    bIllness: {
        label: "Any previous illness?",
        type: String,
        allowedValues: ["no","yes"]
    },

    illness: {
        label: "please indicate",
        optional: true,
        type: [String],
        allowedValues: ['Diabetes', 'Cancer', 'Back Pain', 'Stroke', 'Hypertension', 'Others']
    },

    strIllness: {
        label: "please specify",
        optional: true,
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
        optional: true,
        type: String
    },

    bSmoke: {
        label: "Do you smoke?",
        type: String,
        allowedValues: ["no","yes"]
    },
    smoke: {
        label: "how many sticks a day?",
        optional: true,
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
        optional: true,
        type: String
    },

    /***
     *
     * Character References
     *
     */

    characterRef: {
        label: "Character Reference",
        type: [Object],
        minCount: 3
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
