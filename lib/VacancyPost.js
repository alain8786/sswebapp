vacancyPost = "VacancyPost";
VacancyPost = new Mongo.Collection(vacancyPost);

VacancyPost.attachSchema(new SimpleSchema({
    vesselType:{
        label: "Vessel Type",
        type: String,
        autoform: {
            group: vacancyPost
        }
    },

    department: {
        label: "Department",
        type: String,
        autoform: {
            group: vacancyPost
        }

    },

    jobPosition: {
        label: "Job Title",
        type: String,
        autoform: {
            group: vacancyPost,
            type: 'select'
        }
    },

    openDate: {
        label: "Start of Hiring Date",
        type: Date,
        autoform: {
            type: 'date',
            group: vacancyPost
        }
    },

    closeDate: {
        label: "End of Hiring Date",
        type: Date,
        autoform: {
            type: 'date',
            group: vacancyPost
        }
    }

}));