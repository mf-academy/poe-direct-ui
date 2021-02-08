import { gql } from '@apollo/client';

const trades = gql`
  query GetTrades {
    Trades {
      id
      league { 
        name
      }
      user {
        id
        name
        status
      }
      service { 
        name
      }
      price
      currency
      status
    }
  }
`;

export default trades