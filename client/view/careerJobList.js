/**
 * Created by Alain on 17/11/2016.
 */

Router.route('/cjd',{
    template: 'careerJobDetails'
});

Template.careerJobDetails.events({
    'click #btnApply': function (e){
        //e.preventDefault();
        console.log("pressed");
    }
});
