import { gql, useMutation } from '@apollo/client';

const trade = gql`
  mutation PutTrade($userid: String!, $leagueid: String!, $serviceid: String!, $price: Int!, $currency: String!) {
    putTrade(trade: { userid: $userid, leagueid: $leagueid, serviceid: $serviceid, price: $price, currency: $currency, status: true }) {
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

export default trade