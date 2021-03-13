import gql from "graphql-tag"

export const EDIT_PROFILE = gql`
    mutation EditProfile($id: ID, $payload: AdminInput) {
        EditProfile(id: $id, payload: $payload) {
            msg
            code
        }
    }
`
