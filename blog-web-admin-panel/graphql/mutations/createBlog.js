import gql from "graphql-tag"

export const CREATE_BLOG = gql`
    mutation ($payload:BlogInput){
        CreateBlog(payload: $payload){
            msg
            code
        }
    }
`
