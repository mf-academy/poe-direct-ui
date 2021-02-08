import { gql } from '@apollo/client';

const categories = gql`
  query GetCategories {
    Categories {
      id
      name
      icon
    }
  }
`;

export default categories