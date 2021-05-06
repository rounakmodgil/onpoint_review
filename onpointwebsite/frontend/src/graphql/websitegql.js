import { gql } from "@apollo/client";

const check = gql`
  query {
    hello
  }
`;
const contactsubmit = gql`
  mutation(
    $name: String!
    $phone: String!
    $email: String!
    $description: String
  ) {
    contactSubmit(
      name: $name
      email: $email
      phone: $phone
      description: $description
    )
  }
`;
export { check, contactsubmit };
