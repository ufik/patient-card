Bandage = new Mongo.Collection("bandage");
Bandage.attachSchema(new SimpleSchema({
  date: {
    type: Date,
    label: "Date",
    max: 200
  },
  patientId: {
    type: String,
    optional: true
  },
  bandageBy: {
    type: String,
    allowedValues: ["Doctor", "Sister"]
  },
  pain: {
    type: Number,
    allowedValues: [1, 2, 3, 4]
  },
  secretion: {
    type: Number,
    allowedValues: [0, 1, 2, 3]
  },
  temperature: {
    type: Number,
    allowedValues: [0, 1, 2]
  },
  size: {
    type: String
  },
  scum: {
    type: Number,
    allowedValues: [1, 2, 3]
  },
  woundSurrounding: {
    type: Number,
    allowedValues: [0, 1, 2]
  },
  infection: {
    type: Number,
    allowedValues: [0, 1, 2]
  },
  coating: {
    type: Number,
    allowedValues: [0, 1, 2]
  },
  secretion: {
    type: Number,
    allowedValues: [0, 1, 2, 3]
  },
  debridement: {
    type: Boolean
  },
  compression: {
    type: Boolean
  },
  photoDocumentation: {
    type: Boolean
  }
}));