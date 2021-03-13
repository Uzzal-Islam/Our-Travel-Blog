import {Admin} from '../../Models/Admin'
import {Blog} from "../../Models/Blog";

export const Signup = async (parent, args, ctx, req)=>{
    const {payload} = args
    const newAdmin = new Admin(payload)
    await newAdmin.save()
    return{
        msg:"AdminCreated",
        code:'Created',
    }
}
export  const login = async (parent,args,ctx,req)=>{
    const {email,password} = args
    const data = await Admin.findOne({email:email})
    if(!data){
        return{
            msg:'Email not Exist',
            code:"Error"

        }
    }else {
        const data2 = await Admin.findOne({email:email,password:password})
        if (!data2){
            return {
                msg:'Password Mismatch',
                code:"Error"

            }
        }else {
            return {
                id:data.id,
                Name: data.Name,
                email:data.email,
                msg:'Login Success',
                code:'Success'
            }
        }

    }
}

export const EditProfile = async (parent, args, ctx, req)=>{
    const {id,payload} = args
    await Admin.findOneAndUpdate({_id:id},{$set:payload})
    return {
        msg:'Edited',
        code:'Success'
    }
}
