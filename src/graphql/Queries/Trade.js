import { gql } from '@apollo/client';

const league = gql`
    query GetTrade($id: ID) {
        Trade(id: $id) {
            id
            league
            service
            price
            currency {
                id
                name
            }
            status
        }
    }
`;

export default league