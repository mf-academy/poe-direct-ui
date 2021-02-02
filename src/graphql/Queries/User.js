import { gql } from '@apollo/client';

const league = gql`
    query GetUser($id: ID) {
        user(id: $id) {
            id
            name
            status
            character
        }
    }
`;

export default league