import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;
