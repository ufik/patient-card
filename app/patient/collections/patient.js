Patient = new Mongo.Collection("patients");

Schema = new SimpleSchema({
    "name": {
      type: String,
      max: 200
    },
    "sex": {
      type: String,
      allowedValues: ["male", "female"]
    },
    "address": {
      type: String,
    },
    "treatmentStarted": {
      type: Date,
    },
    "diagnosis": {
      type: String,
    },
    "phone": {
      type: String,
    }
  });



Meteor.startup(function() {
  Schema.i18n("project.schemas.patients");
  Patient.attachSchema(Schema);
});