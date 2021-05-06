const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer, UserInputError} = require('apollo-server-express');
const {makeExecutableSchema} = require('@graphql-tools/schema');
const {applyMiddleware} = require('graphql-middleware');
const cookieParser = require('cookie-parser');
const {verify} = require('jsonwebtoken');
const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');
const {isAuth} = require('./isAuth');
const {Users} = require('./models/User');
const {createAccessToken, createRefeshToken} = require('./auth');
const {sendRefreshToken} = require('./sendRefreshToken');
const cors = require('cors');
const {setCurrUser} = require('./currUser');

(async () => {
  const app = express();

  //allow cross-origin request
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  // for parsing cookies
  app.use(cookieParser());

  //all the endpoints are being sered here
  app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ok: false, accessToken: ''});
    }
    let payload = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      return res.send({ok: false, accessToken: ''});
    }
    //token is valid
    //we can send back the accessToken
    const User = await Users.findById(payload.userId);

    if (!User) {
      return res.send({ok: false, accessToken: ''});
    }
    if (User.tokenVersion !== payload.tokenVersion) {
      return res.send({ok: false, accessToken: ''});
    }
    setCurrUser(payload.userId);
    sendRefreshToken(res, createRefeshToken(User));
    return res.send({ok: true, accessToken: createAccessToken(User)});
  });

  //middleware
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const middleware = [isAuth];
  const schemaWithMiddleware = applyMiddleware(schema, ...middleware);
  const apolloServer = new ApolloServer({
    schema: schemaWithMiddleware,
    context: ({req, res}) => ({req, res}),
  });

  apolloServer.applyMiddleware({app, cors: false});

  await mongoose
    .connect('mongodb://localhost/we')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to mongodb', err));

  app.listen(4000, () => {
    console.log('express server started on 4000');
  });
})();
