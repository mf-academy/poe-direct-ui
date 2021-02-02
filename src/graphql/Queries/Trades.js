import { gql } from '@apollo/client';

const trades = gql`
  query GetTrades {
    trades {
      id
      leagueid
      userid
      serviceid
      price
      currency
      status
    }
  }
`;

export default trades