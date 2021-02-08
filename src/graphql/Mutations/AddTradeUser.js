import { gql } from '@apollo/client';

const addtradeuser = gql`
  mutation AddTradeUser($from: _TradeInput!, $to: _UserInput!) {
    AddTradeUser(from: $from, to: $to) { 
        from {
            id
        }
        to {
            id
        }
    }
  }
`;

export default addtradeuser