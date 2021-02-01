import { gql } from '@apollo/client';

const categories = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export default categories