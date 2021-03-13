import gql from "graphql-tag"

export const EDIT_BLOG = gql`
    mutation EditBlog($id: ID, $payload: BlogInput) {
        EditBlog(id: $id, payload: $payload) {
            msg
            code
        }
    }

`
