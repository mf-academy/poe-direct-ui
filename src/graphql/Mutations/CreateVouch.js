import { gql } from '@apollo/client';

const vouch = gql`
  mutation CreateVouch {
    CreateVouch {
      id
    }
  }
`;

export default vouch