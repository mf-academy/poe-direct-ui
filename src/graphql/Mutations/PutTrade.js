import { gql, useMutation } from '@apollo/client';

const trade = gql`
  mutation PutTrade($price: Int!, $currency: String!, $status: Boolean) {
    CreateTrade(price: $price, currency: $currency, status: $status) {
      id
      price
      currency
    }
  }
`;

export default trade