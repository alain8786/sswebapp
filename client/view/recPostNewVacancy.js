Router.route('/recPNV',{
    template: 'recPostNewVacancy'
});

Router.route('/recAJP',{
   template: 'recAddJobPosition'
});

Session.set('sJPname','');

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

    jpname: function(){
        return Session.get('sJPname');

    }
});

Template.recPostNewVacancy.events({
    'change .form-control': function (e) {
        e.preventDefault();
        if (e.target.getAttribute('name') === 'jobPositionID'){
            let rsName = JobPosition.findOne(
                {_id: e.target.value},
                {name: 1, _id: 0}
            ).name;
            Session.set('sJPname', rsName);
            console.log("pressed select field " + e.target.value);
        }
        console.log("diff target " + e.target.value);

    }

});