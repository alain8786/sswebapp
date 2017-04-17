/**
 * Created by Alain on 17/11/2016.
 */

Router.route('/cjl',{
    template: 'careerJobList'
});

Router.route('/cjd/:_id', function(){
    this.render('careerJobDetails',{
        data: {
            id: this.params._id
        }
    });
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
    }
});