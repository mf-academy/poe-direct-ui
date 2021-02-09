import { gql } from '@apollo/client';

const report = gql`
  mutation CreateReport {
    CreateReport {
      id
    }
  }
`;

export default report