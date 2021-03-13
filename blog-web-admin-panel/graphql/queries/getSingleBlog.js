import gql from "graphql-tag"

export const GET_SINGLE_BLOG = gql`
    query GetSingleBlog($id: ID) {
        GetSingleBlog(id: $id) {
            id
            titel
            Details
            createdAt
            updatedAt
            status
            msg
        }
    }
`
