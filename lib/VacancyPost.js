vacancyPost = "VacancyPost";
VacancyPost = new Mongo.Collection(vacancyPost);

VacancyPost.attachSchema(new SimpleSchema({

    dateStart: {
        label: "Start of Hiring Date",
        type: Date,
        autoform: {
            type: 'date',
            group: vacancyPost
        }
    },

    dateEnd: {
        label: "End of Hiring Date",
        type: Date,
        autoform: {
            type: 'date',
            group: vacancyPost
        }
    },

    vesselType:{
        label: "Vessel Type",
        type: String,
        autoform: {
            group: vacancyPost,
            type: 'text'
        }
    },

    jobPosition: {
        type: String,
        autoform: {
            group: vacancyPost,
            type: 'hidden',
            label: false
        }
    },

    jobPositionID: {
        label: "Job Title",
        type: String,
        autoform: {
            group: vacancyPost,
            type: 'select'
        }
    }

}));