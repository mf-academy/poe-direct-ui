import { gql, useMutation } from '@apollo/client';

const addtradecurrency = gql`
  mutation AddTradeCurrency($from: _TradeInput!, $to: _CurrencyInput!) {
    AddTradeCurrency(from: $from, to: $to) { 
        from {
            id
        }
        to {
            id
        }
    }
  }
`;

export default addtradecurrency