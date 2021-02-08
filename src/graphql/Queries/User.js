import { gql } from '@apollo/client';

const league = gql`
    query GetUser($id: ID) {
        User(id: $id) {
            id
            name
            status
            character
        }
    }
`;

export default league