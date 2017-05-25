/**
 * Created by Alain on 01/11/2016.
 */

/*
Router.configure({
    layoutTemplate: 'layout'
});
*/

Router.route('/', {
    name: 'home',
    template: 'recPostNewVacancy'
});

Router.route('/books', {
    template: 'insertBookForm'
});

Router.route('/c',{
    template: 'careerAppForm'
});

Session.set('sAge','');

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

Template.careerForm.events({
    'submit .form-horizontal'(event){
        event.preventDefault();
        Router.go('books');
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

Template.careerAppForm.helpers({
    agControlNo: function () {
        return "24654sdfs";

    },

    today: function(){
        return moment().format("YYYY-MM-DD");
    },

    jobPositionOptions: function(){
        var jobPosID = Router.current().params.query.id;
        var jobPos = JobPosition.findOne(
            {_id: jobPosID},
            {name: 1, _id: 0}
        ) || {};

        return jobPos.name;

        // return [
        //     {label: "Sous Chef", value: "Sous Chef"},
        //     {label: "Engine Repairman", value: "Engine Repairman"},
        //     {label: "Laundryman", value: "Laundryman"}
        // ];
    },

    ageAutoCalc: function(){
        //return moment().format(Template.careerForm.dateOfBirth
        //Session.set('sAge','08/27/1986');
        return Math.floor(moment(new Date()).diff(moment(Session.get('sAge'),"MM/DD/YYYY"),'years',true));

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

Template.careerAppForm.events({
    'change .form-control': function (e) {
        e.preventDefault();
        if (e.target.getAttribute('name') === 'dateOfBirth'){
            Session.set('sAge', moment(e.target.value).format('MM/DD/YYYY'));
            console.log("sAge " + moment(e.target.value).format('MM/DD/YYYY'));
        }
        console.log("NOT sAge " + e.target.value);
    }

});


AutoForm.hooks({
   careerAppForm: {
       onSubmit: function(doc){
           this.event.preventDefault();
           Applicant.insert(doc);
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