const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { applyMiddleware } = require("graphql-middleware");
const cookieParser = require("cookie-parser");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const cors = require("cors");

(async () => {
  const app = express();

  //allow cross-origin request
  app.use(
    cors({
      origin: "http://sigdihomefood.in",
    })
  );

  // for parsing cookies
  app.use(cookieParser());

  //middleware
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const middleware = [];
  const schemaWithMiddleware = applyMiddleware(schema, ...middleware);
  const apolloServer = new ApolloServer({
    schema: schemaWithMiddleware,
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  await mongoose
    .connect("mongodb://localhost/sigdiwebsite")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to mongodb", err));

  app.listen(4000, () => {
    console.log("express server started on 4000");
  });
})();
