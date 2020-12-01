import User from "../models/User";
import Role from "../models/Role";
import Company from "../models/Company";

export const createuser = async (req, res) => {
  try {
    const { name, email, pass, role, company, info } = req.body;

    // creating a new User
    const user = new User({
      name,
      email,
      pass,
      company,
      role,
      info
    });

    // encrypting password
    user.pass = await User.encryptPassword(user.pass);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      role: savedUser.role,
      companys: savedUser.companys,
      info: savedUser.info,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getusers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
}

export const getuser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  return res.json(user);
}

export const updateuser = async (req, res) => {
  console.log(req.params);
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedUser);
}

export const addroles = async (req, res) => {
  const { role } = req.body;
  const { userId } = req.params;
  console.log("ELBODY : ", role);
  if (role === null) {
    return res.status(500).send({ message: "error null" });
  }
  if (role === undefined) {
    return res.status(500).send({ message: "error undefined" });
  }
  const user = await User.findById(userId);
  if (!user.role.includes(role)) {
    const updatedUser = await User.findByIdAndUpdate(userId, { $push: { role: role } }, { new: true })
    res.status(204).json(updatedUser);
  }
  else {
    return res.status(500).send({ message: "el usuario ya tiene asignado ese rol" });
  }
}

export const remoroles = async (req, res) => {
  const { role } = req.body;
  const { userId } = req.params;
  console.log("ELBODY : ", role);
  if (role === "undefined") {
    return res.status(500).send({ message: "error undefined" });
  }
  if (role === "admin") {
    return res.status(500).send({ message: "no se puede eliminar el rol de admin" });
  }
  const user = await User.findById(userId);
  if (user.role.includes(role)) {
    const updatedUser = await User.findByIdAndUpdate(userId, { $pull: { role: role } }, { new: true })
    res.status(204).json(updatedUser);
  }
  else {
    return res.status(500).send({ message: "error eliminando el rol" });
  }
}

export const adduser = async (req, res) => {

  const { userId } = req.params; //id del usuarioactual
  const { id } = req.body; // id del usuario foraneo
  if (userId === id) return res.status(500).send({ message: "error no se puede agregar a uno mismo" });
  if (id === null) return res.status(500).send({ message: "error null" });
  if (id === undefined) return res.status(500).send({ message: "error undefined" });
  const usera = await User.findById(userId);
  const userx = await User.findById(id);

  const objetoUsuarioA = usera.users;
  const ArrayParseadoAtexto = JSON.stringify(objetoUsuarioA);

  if (!ArrayParseadoAtexto.includes(id)) {
    const updatedUser = await User.findByIdAndUpdate(userId, { $push: { users: userx } }, { new: true })
    res.status(204).json(updatedUser);
  }
  else {
    return res.status(500).send({ message: "el usuario ya tiene asignado ese usuario" });
  }
}

export const deleteuser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (user.email === "admin@localhost") {
    return res.status(500).send("no puedes eliminar al admin principal");
  }
  const userdel = await User.findByIdAndDelete(userId);
  return res.json(userdel);
}







// export const createuser2 = async (req,res)=> {
//   const { name, email, pass, roles, company } = req.body;
//   const user = new User({
//     name,
//     email,
//     pass,
//     company,
//   })
//   const a = User.create(input).then(
//     function exito(params) {
//         console.log(params);
//         console.log("exito");
//     const cosa = new Cosa({
//           name: 'Casino Royale asdadoooooooooooooo',
//           user: params._id    // assign the _id from the person
//         });
//         cosa.save();
//         return params;
//       },
//     function fracaso(params) {
//         console.log("fracaso");
//     }
//   )
//   return a;
// }