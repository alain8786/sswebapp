Router.route('/recPNV',{
    template: 'recPostNewVacancy'
});

Router.route('/recAJP',{
   template: 'recAddJobPosition'
});

Session.set('sJPID','');

AutoForm.hooks({
    recPostNewVacancyForm: {
        onSubmit: function(doc){
            this.event.preventDefault();
            VacancyPost.insert(doc);

            console.log('onSubmit New Vacancy Form called');
            return false;
        }
    },

    recAddJobPositionForm: {
        onSubmit: function(doc){
            this.event.preventDefault();
            JobPosition.insert(doc);

            console.log('onSubmit New Job Position Form called');
            return false;
        }
    }
});

Template.recPostNewVacancy.helpers({
    jobPositionSelectList: function(){
        return JobPosition.find().map(function (jp) {
            return {
                label: jp.name,
                value: jp._id
            };
        });
    },

    jpid: function(){
        return Session.get('sJPID');

    }
});

Template.recPostNewVacancy.events({
    'change .form-control': function (e) {
        e.preventDefault();
        if (e.target.getAttribute('name') === 'jobPosition')
            Session.set('sJPID',e.target.value);
        console.log("pressed select " + e.target.value);
    }


});