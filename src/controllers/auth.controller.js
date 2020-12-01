import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  // const userFound = User.find({email})
  const { name, email, pass, roles } = req.body;
  // console.log(req.body)
  const newUser = new User({
    name,
    email,
    pass: await User.encryptPassword(pass)
  })

  // Saving the User Object in Mongodb
  const saveuser = await newUser.save();
  const token = jwt.sign({ id: saveuser._id }, config.SECRET, { expiresIn: 36000 })
  // console.log(newUser)
  // console.log(saveuser)
  res.status(200).json({ token })
};

export const signin = async (req, res) => {
  try {
    const userfound = await User.findOne({ email: req.body.email }).populate('roles')

    if (!userfound) {
      return res.status(400).json({ msg: "usuario no encontrado" })
    }

    const match = await User.comparePassword(req.body.pass, userfound.pass)

    if (!match) {
      return res.status(401).json({ token: null, msg: "contraseña invalida" })
    }

    const token = jwt.sign({ id: userfound._id }, config.SECRET, { expiresIn: 36000 })

    // let id = token.id
    // console.log("userfound",userfound)

    res.json({ token })

  } catch (error) {
    console.log(error);
  }
};