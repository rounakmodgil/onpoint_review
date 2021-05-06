const { Contacts } = require("./models/SigdiWebsite");

const resolvers = {
  Query: {
    hello: () => "wassap",
  },
  Mutation: {
    contactSubmit: async (_, { name, phone, email, description }) => {
      const NewEntry = new Contacts({ name, phone, email, description });
      try {
        await NewEntry.save();
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
  },
};
module.exports = { resolvers };
