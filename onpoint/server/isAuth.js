const { verify } = require("jsonwebtoken");

const isAuth = {
  Query: {
    bye: async (resolve, parent, args, context, info) => {
      const authorization = context.req.headers["authorization"];
      if (!authorization) {
        throw new Error("not authenticated");
      }
      try {
        const token = authorization.split(" ")[1];
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
      } catch (err) {
        console.log(err);
        throw new Error("not authenticated");
      }
      return await resolve(parent, args, context, info);
    },
  },
};

module.exports = { isAuth };
