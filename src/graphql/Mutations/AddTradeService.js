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
                status
            }
            service {
                name
            }
            price
            currency {
                id
                name
            }
            status
        }
        to {
            id
        }
    }
  }
`;

export default addtradeservice