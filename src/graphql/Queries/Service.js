import { gql } from '@apollo/client';

const service = gql`
    query GetService($id: ID) {
        service(id: $id) {
            id
            name
        }
    }
`;

export default service