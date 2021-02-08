import { gql } from '@apollo/client';

const categories = gql`
  query GetLeagues {
    Leagues {
      id
      name
    }
  }
`;

export default categories