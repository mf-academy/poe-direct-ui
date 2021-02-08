import { gql } from '@apollo/client';

const currencies = gql`
  query GetCurrencies {
    Currencies {
      id
      name
    }
  }
`;

export default currencies