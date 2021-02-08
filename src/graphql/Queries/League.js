import { gql } from '@apollo/client';

const league = gql`
    query GetLeague($id: ID) {
        League(id: $id) {
            id
            name
        }
    }
`;

export default league