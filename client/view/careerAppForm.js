/**
 * Created by Alain on 01/11/2016.
 */

Router.configure({
    layoutTemplate: 'layout'
});

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

    ageAutoCalc: function(){
        //return moment().format(Template.careerForm.dateOfBirth

        return Math.floor(moment(new Date()).diff(moment("08/27/1986","MM/DD/YYYY"),'years',true));

    },

    referralOptions: function () {
        return [
            {label: "Facebook", value: "Facebook"},
            {label: "Word of Mouth", value: "Word of Mouth"}
        ];
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

// Template.careerForm.events({
//     'click #btnSubmit': function (e){
//         e.preventDefault();
//         console.log("submit button pressed");
//         Router.go('home');
//     }
//
// });

AutoForm.hooks({
   careerForm: {
       onSubmit: function(doc){
           this.event.preventDefault();
           BasicInfo.insert(doc);
           console.log('onSubmit careerForm called');
           return false;
       }
   },

    testForm: {
        onSubmit: function(){
            this.event.preventDefault();
            console.log('onSubmit testForm called');
            return false;
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



// AutoForm.addHooks('testForm', {
//
// });

Template.tester.helpers({
    schema: function(){
        return new SimpleSchema({
            test: {
                type: String
            },
            name: {
                type: String
            }
        });
    }
});