import { gql } from '@apollo/client';

const categories = gql`
  query GetLeagues {
    leagues {
      id
      name
    }
  }
`;

export default categories