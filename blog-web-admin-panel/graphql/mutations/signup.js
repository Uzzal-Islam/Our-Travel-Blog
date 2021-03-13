import gql from "graphql-tag"

export const SIGN_UP = gql`
    mutation Signup($payload: AdminInput) {
        Signup(payload: $payload) {
            msg
            code
        }
    }
`
