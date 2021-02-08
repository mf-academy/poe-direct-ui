import { gql } from '@apollo/client';

const services = gql`
  query GetServices {
    Services {
      id
      name
    }
  }
`;

export default services