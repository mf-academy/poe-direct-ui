import { gql } from '@apollo/client';

const addtradeservice = gql`
  mutation AddTradeService($from: _TradeInput!, $to: _ServiceInput!) {
    AddTradeService(from: $from, to: $to) { 
        from {
            id
            league {
                id
                name
            }
            user {
                id
                name
            }
            service {
                id
                name
            }
            price
            currency
            status
        }
        to {
            id
        }
    }
  }
`;

export default addtradeservice