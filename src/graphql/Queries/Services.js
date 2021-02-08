import { gql } from '@apollo/client';

const services = gql`
  query GetServices($filter: _ServiceFilter) {
    Services(filter: $filter) {
      id
      name
    }
  }
`;

export default services