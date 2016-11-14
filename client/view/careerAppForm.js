/**
 * Created by Alain on 01/11/2016.
 */

Router.route('/', {
    name: 'home',
    template: 'cA'
});

Router.route('/books', {
    template: 'insertBookForm'
});

Router.route('/careers',{
   template: 'careerAppForm'
});

Template.basicInfo.onRendered(function() {

    $('.dateApplied').datetimepicker({
        format: "MMM DD, YYYY",
        defaultDate: moment().format()
    });
});

Template.basicInfo.events({
   'click .selItem'(event){
       posApplied = event.target.text;
       console.log(event.target.text);
    }

});

Template.basicInfo.helpers({
   posApplied(text){
       return text;
   }
});

Template.careerAppForm.helpers({

});

Template.careerAppForm.events({
    'submit .form-horizontal'(event){
        event.preventDefault();
        Router.go('books');
    }
});

AutoForm.hooks({

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
            group: basicInfo,
            type: 'text'
        }
    },

    jobPositionApplied: {
        label: "Position Applied For",
        type: String,
        allowedValues: ['Chef','Waiter','Engineer'],
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
        type: [String],
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
        type: [String],
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
        type: [String],
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
        type: [String],
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

    spouseName: {
        label: "Name of spouse",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    spouseDOB: {
        label: "Birthdate",
        type: Date,
        autoform: {
            group: basicInfo,
            type: 'date'
        }

    },

    spouseAddress: {
        label: "Address",
        type: String,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    },

    spouseContactNo: {
        label: "Contact No",
        type: Number,
        autoform: {
            group: basicInfo,
            type: 'text'
        }
    }



}));