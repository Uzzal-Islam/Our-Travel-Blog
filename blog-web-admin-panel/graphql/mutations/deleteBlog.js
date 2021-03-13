import gql from "graphql-tag"

export const DELETE_BLOG = gql`
    mutation EditBlog($id: ID) {
        EditBlog(id: $id, payload: { Status: "Deleted" }) {
            msg
            code
        }
    }
`
