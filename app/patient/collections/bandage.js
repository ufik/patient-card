Bandage = new Mongo.Collection("bandage");
Bandage.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  }
}));