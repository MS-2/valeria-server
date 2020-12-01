import User from "../models/User";
import Role from "../models/Role";

export const createrole = async (req,res)=>{
    try {
        const { name, description } = req.body;
    
        const role = new Role({
          name,
          description
        });
       
        // saving the new user
        const rolesaved = await role.save();
    
        return res.status(200).json({
          _id: rolesaved._id,
          name: rolesaved.name,
          description: rolesaved.description,
        });
      } catch (error) {
        console.error(error);
      }
}

export const getrole = async (req,res)=>{
  const rols = await Role.find();
  // console.log("test")
  return res.json(rols);
}

export const deleterole = async (req,res)=>{
  const { roleId } = req.params;
  console.log("ROLEID : ", roleId  )
  const rol = await Role.findByIdAndDelete(roleId);
  return res.json(rol);
}