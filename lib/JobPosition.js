jobPosition = "JobPosition";
JobPosition = new Mongo.Collection(jobPosition);

JobPosition.attachSchema(new SimpleSchema({
    name: {
        type: String,
        autoform: {
            group: jobPosition,
            type: 'text'
        }
    },

    jobCommitment: {
        type: String,
        autoform: {
            group: jobPosition,
            type: 'text'
        }
    },

    qualifications: {
        type: String,
        autoform: {
            group: jobPosition,
            type: 'textarea'
        }
    },

    keyResponsibilities: {
        type: String,
        autoform: {
            group: jobPosition,
            type: 'textarea'
        }
    },

    visaRequirements: {
        type: [String],
        autoform: {
            group: jobPosition,
            type: 'text'
        }
    }

    // departmentID: {
    //     type: String,
    //     autoform: {
    //         group: jobPosition,
    //         type: 'text'
    //     }
    // }

}));
