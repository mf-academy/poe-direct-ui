import { gql } from '@apollo/client';

const league = gql`
    query GetTrade($id: ID) {
        Trade(id: $id) {
            id
            league
            service
            price
            currency
            status
        }
    }
`;

export default league