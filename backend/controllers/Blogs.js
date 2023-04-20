import Users from "../models/UserModel.js";
import blogs from "../models/Blogs.js";

export const allblogs = async(req,res)=>{
    try{
        const allblogs= await blogs.findAll();
        res.json(allblogs)
    }catch(error){
        console.log(error)
    }
}

export const userblogs =async(req,res)=>{
    try{
        const userblogs= await blogs.findAll({
            where:{
                user_id: req.body.id
            }
        }
        )
        res.json(userblogs)
    }catch(error){
        console.log(error)
    }
}
