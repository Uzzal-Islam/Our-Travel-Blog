const {ApolloServer, gql} = require('apollo-server');

export const typeDefs = gql`    
    type msg{
        msg: String
        code:String
    }
    
    
    type Admin{
        Name: String,
        email:String,
    }
    type AdminLogin{
        id:ID,
        Name: String,
        email:String,
        msg: String,
        code: String
    }
    input AdminInput{
        Name: String,
        email:String,
        password:String
    }
    type blog{
        id:ID,
        titel : String,
        Details : String,
        createdAt : String,
        updatedAt : String,
        status:String
    }
    type Blogs{
        Blog:[blog]
        msg:String,
        code:String,
    }
    type Blog{
        id:ID,
        titel : String,
        Details : String,
        createdAt : String,
        updatedAt : String,
        status:String,
        msg:String,
        code:String,
    }
    input BlogInput{
        titel : String,
        Details : String,
        Status:String
    }
    
#    All Query
    type Query{
        testQuery: msg
        GetAllBlog:Blogs
        GetSingleBlog(id: ID):Blog
    }
    
#    ALL Mutation
    type Mutation{
        testMutation: msg
        Signup(payload:AdminInput): msg
        login(email:String,password:String):AdminLogin
        EditProfile(id:ID,payload:AdminInput):msg
        CreateBlog(payload:BlogInput):msg
        EditBlog(id:ID,payload:BlogInput):msg
        
    }
`
