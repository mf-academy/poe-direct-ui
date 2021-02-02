import { gql } from '@apollo/client';

const league = gql`
    query GetTrade($id: ID) {
        trade(id: $id) {
            id
            leagueid
            serviceid
            price
            currency
            status
        }
    }
`;

export default league