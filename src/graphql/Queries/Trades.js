import { gql } from '@apollo/client';

const trades = gql`
  query GetTrades {
    trades {
      id
    }
  }
`;

export default trades