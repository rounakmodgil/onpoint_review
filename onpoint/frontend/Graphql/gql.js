import gql from 'graphql-tag';

const check = gql`
  query {
    hello
  }
`;
const bye = gql`
  query {
    bye
  }
`;
const me = gql`
  query {
    me
  }
`;
const users = gql`
  query {
    users {
      id
      email
    }
  }
`;
const getCategory = gql`
  query {
    getCategory {
      id
      category
    }
  }
`;
const register = gql`
  mutation(
    $name: String!
    $phone: String!
    $email: String!
    $password: String!
  ) {
    createUser(name: $name, phone: $phone, email: $email, password: $password)
  }
`;

const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        id
        email
      }
    }
  }
`;
const logout = gql`
  mutation {
    logout
  }
`;
const s3SignMutation = gql`
  mutation($filename: String!, $filetype: String!) {
    signS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;
const savepictureurl = gql`
  mutation($profilepictureurl: String!, $id: String!) {
    savepictureurl(profilepictureurl: $profilepictureurl, id: $id)
  }
`;

export {
  check,
  register,
  users,
  login,
  bye,
  logout,
  s3SignMutation,
  savepictureurl,
  me,
  getCategory,
};
