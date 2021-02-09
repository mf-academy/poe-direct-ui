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
        reports {
          id
        }
        vouches {
          id
        }
      }
      service { 
        name
      }
      price
      currency {
        id
        name
        icon
      }
      status
    }
  }
`;

export default trades