import { gql, useMutation } from '@apollo/client';

const trade = gql`
  mutation PutTrade($price: Int!, $status: Boolean!) {
    CreateTrade(price: $price, status: $status) {
      id
      price
    }
  }
`;

export default trade