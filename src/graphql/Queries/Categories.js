import { gql } from '@apollo/client';

const categories = gql`
  query GetCategories {
    Categories {
      id
      name
    }
  }
`;

export default categories