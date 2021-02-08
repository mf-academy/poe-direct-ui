import { gql } from '@apollo/client';

const trades = gql`
  query GetTrades($filter: _TradeFilter) {
    Trades(filter: $filter) {
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