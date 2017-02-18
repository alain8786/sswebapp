jobPosition = "JobPosition";
JobPosition = new Mongo.Collection(jobPosition);

JobPosition.attachSchema(new SimpleSchema({
    name: {
        type: String
    },

    jobCommitment: {
        type: String
    },

    qualifications: {
        type: String
    },

    keyResponsibilities: {
        type: String
    },

    visaRequirements: {
        type: [String]
    },

    departmentID: {
        type: ObjectId
    }

}));
