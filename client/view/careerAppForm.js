/**
 * Created by Alain on 01/11/2016.
 */

Router.route('/', {
    name: 'home',
    template: 'careerJobList'
});

Router.route('/books', {
    template: 'insertBookForm'
});

Router.route('/c',{
    template: 'careerForm'
});

/**
Template.basicInfo.onRendered(function() {

    $('.dateApplied').datetimepicker({
        format: "MMM DD, YYYY",
        defaultDate: moment().format()
    });
});

Template.basicInfo.events({
   'click .selItem'(event){
       var posApplied = event.target.text;
       console.log(event.target.text);
    }

});

Template.basicInfo.helpers({
   posApplied(text){
       return text;
   }
});
 **/

Template.careerAppForm.events({
    'submit .form-horizontal'(event){
        event.preventDefault();
        Router.go('books');
    }
});

Template.careerForm.helpers({
    agControlNo: function () {
        return "24654sdfs";

    },

    today: function(){
        return moment().format("YYYY-MM-DD");
    },

    jobPositionOptions: function(){
        return [
            {label: "Sous Chef", value: "Sous Chef"},
            {label: "Engine Repairman", value: "Engine Repairman"},
            {label: "Laundryman", value: "Laundryman"}
        ];
    },

    referralOptions: function () {
        return [
            {label: "Facebook", value: "Facebook"},
            {label: "Word of Mouth", value: "Word of Mouth"}
        ];
    },

    ageOptions: function () {
        return {
            18: "18",
            19: "19",
            20: "20",
            21: "21",
            22: "22",
            23: "23",
            24: "24",
            25: "25",
            26: "26",
            27: "27",
            28: "28",
            29: "29",
            30: "30",
            31: "31",
            32: "32",
            34: "34",
            35: "35",
            36: "36",
            37: "37",
            38: "38",
            39: "39",
            40: "40",
            41: "41",
            42: "42",
            43: "43",
            44: "44",
            45: "45",
            46: "46",
            47: "47",
            48: "48",
            49: "49",
            50: "50",
            51: "51",
            52: "52",
            53: "53",
            54: "54",
            55: "55",
            56: "56",
            57: "57",
            58: "58",
            59: "59",
            60: "60",
            61: "61",
            62: "62",
            63: "63",
            64: "64",
            65: "65"
        }
    },

    civilStatusOptions: function () {
        return [
            {label: "Single", value: "Single"},
            {label: "Married", value: "Married"},
            {label: "Widowed", value: "Widowed"},
            {label: "Separated", value: "Separated"},
            {label: "Divorced", value: "Divorced"}
        ];
    },

    genderOptions: function () {
        return [
            {label: "Male", value: "Male"},
            {label: "Female", value: "Female"}
        ];
    }

});

Template.careerForm.events({

});

AutoForm.hooks({
    careerForm:{
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.done();
            Router.go('books');
        }

    }
    

});

Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    copies: {
        type: Number,
        label: "Number of copies",
        min: 0
    },
    lastCheckedOut: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
}));

studentData = "StudentData";  // avoid typos, this string occurs many times.

StudentData = new Mongo.Collection(studentData);

StudentData.attachSchema(new SimpleSchema({
    name: {
        label: "Name",
        type: String,
        optional: false,
        max: 20,
        autoform: {
            group: studentData,
            placeholder: "John Doe"
        }
    },
    bio: {
        label: "Bio",
        type: String,
        optional: true,
        max: 1000,
        autoform: {
            group: studentData,
            placeholder: 'Short (less than 1000 characters) biographical statement.',
            rows: 5
        }
    },
    hobbies: {
        label: "Hobbies",
        type: [String],
        optional: true,
        allowedValues: ['Surfing', 'Running', 'Biking', 'Paddling'],
        autoform: {
            group: studentData,
            type: "select-checkbox-inline"
        }
    },
    level: {
        label: "Level",
        type: String,
        optional: false,
        allowedValues: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
        autoform: {
            group: studentData,
            type: 'select-radio-inline'
        }
    },
    gpa: {
        label: "GPA",
        type: Number,
        optional: false,
        allowedValues: [0, 1, 2, 3, 4],
        autoform: {
            group: studentData,
            options: [
                {label: "0.0 - 0.99 GPA", value: 0},
                {label: "1.0 - 1.99 GPA", value: 1},
                {label: "2.0 - 2.99 GPA", value: 2},
                {label: "3.0 - 3.99 GPA", value: 3},
                {label: "4.0 (or greater) GPA", value: 4}
            ]
        }
    },
    majors: {
        label: "Majors",
        type: [String],
        optional: true,
        allowedValues: ['Physics', 'Math', 'Biology', 'Chemistry'],
        autoform: {
            group: studentData,
            type: 'select-multiple'

        }
    }
}));

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

    /***
     *
     * Personal Background
     *
     */

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
        type: [String],
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


    /***
     *
     * Educational Background
     *
     */



    /***
     *
     * Past Employment
     *
     */

    /***
     *
     * Licenses
     *
     */

    /***
     *
     * Visa Information
     *
     */

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


    /***
     *
     * Training Certificate
     *
     */

    /***
     *
     * Family Information
     *
     */

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

    /***
     *
     * Character References
     *
     */

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