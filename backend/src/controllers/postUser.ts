import User from "../models/User";


    export const postUser = async (req:any,res:any)=>{
  const {email,password} = req.body

  if(!email && !password){
    return res.status(422).json({msg:'Email and Password is required'})
  }
 
  const userExist = await User.findOne({email:email})

  if (userExist) {
    return res.status(422).json({msg:'O email já está cadastrado'})
  }

  const user = new User({
    email:email,
    password:password
  })

  try{
    await user.save()
    res.status(201).json({msg:'salvo'})
    
  }catch(error){
    res.status(500).json({msg:"error"})
  }
}