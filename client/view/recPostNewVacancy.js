Router.route('/recPNV',{
    template: 'recPostNewVacancy'
});

Router.route('/recAJP',{
   template: 'recAddJobPosition'
});


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
            return {label: jp.name, value: jp._id};
        });
    }
});