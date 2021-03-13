import {Blog} from '../../Models/Blog'

export const GetAllBlog = async (parent, args, ctx, req)=>{
    const data= await Blog.find({status:'Active'})
    return{
        Blog: data,
        msg:'Success',
        code:'Success'
    }
}

export const GetSingleBlog = async (parent, args, ctx, req)=>{
    const {id} = args
    console.log('id-->', id)
    try {
        const data= await Blog.findById({_id:id})
        console.log('data--->', data)
        return{
            id: data._id,
            titel : data.titel,
            Details : data.Details,
            createdAt : data.createdAt,
            updatedAt : data.updatedAt,
            status: data.status,
            msg:'Success',
            code:'Success'
        }
    } catch (e) {
        return {
            msg: e.message,
            code: 'Failed'
        }
    }
}
