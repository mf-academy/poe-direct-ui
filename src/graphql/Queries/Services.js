import { gql } from '@apollo/client';

const services = gql`
  query GetServices {
    services {
      id
      name
    }
  }
`;

export default categories