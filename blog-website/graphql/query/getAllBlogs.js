import gql from "graphql-tag"

export const GET_ALL_BLOG = gql`
  query{
    GetAllBlog{
      Blog{
        id
        titel
        Details
        createdAt
        updatedAt
        status
      }
      msg
    }
  }
`
