/**
 * Created by Alain on 17/11/2016.
 */

Router.route('/cjl',{
    template: 'careerJobList'
});

// Router.route('/cjd/:_id', function(){
//     this.render('careerJobDetails',{
//         data: {
//             id: this.params._id
//         }
//     });
// });

Router.route('/cjd/:_id', {
    name: 'careerJobDetails',
    template: 'careerJobDetails',
    data: function(){
        return JobPosition.findOne({_id: this.params._id});
    }

});



Template.careerJobDetails.events({
    'click #btnApply': function (e){
        //e.preventDefault();
        console.log("pressed");
    }
});

Template.careerJobList.helpers({
    vacancyPostList: function(){
        return VacancyPost.find();
    },

    findJobPosName: function(jpid){
        //return JobPosition.findOne({_id: jpid});
    }
});

Template.registerHelper('formatDate', function (inputDate) {
    return moment(inputDate).format('YYYY-MMM-DD');
});

