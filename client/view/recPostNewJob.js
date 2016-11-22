Router.route('/recPNJ',{
    template: 'recPostNewJob'
});


jobPosition = "JobPosition";
JobPosition = new Mongo.Collection(jobPosition);

JobPosition.attachSchema(new SimpleSchema({
    vesselType:{
        label: "Vessel Type",
        type: String,
        autoform: {
            group: jobPosition
        }
    },

    department: {
        label: "Department",
        type: String,
        autoform: {
            group: jobPosition
        }

    },

    jobTitle: {
        label: "Job Title",
        type: String,
        autoform: {
            group: jobPosition
        }
    },

    nCrewNeeded: {
        label: "How many crew needed",
        type: Number,
        autoform: {
            group: jobPosition
        }
    },

    openDate: {
        label: "Start of Hiring Date",
        type: Date,
        autoform: {
            type: 'date',
            group: jobPosition
        }
    },

    closeDate: {
        label: "End of Hiring Date",
        type: Date,
        autoform: {
            type: 'date',
            group: jobPosition
        }
    },

    qualifications: {
        label: "Qualifications",
        type: String,
        autoform: {
            type: 'textarea',
            group: jobPosition
        }
    }

}));