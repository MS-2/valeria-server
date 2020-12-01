import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from "../models/Role"


export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });
    // console.log(user);  
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};


export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    // let a = [];
    //  a = user.role;
    if (user.role.includes("admin")) {
      next();
      console.log("verificacion que es admin en auth")
      return;

    } else {
      return res.status(403).json({ message: "Require Admin Role!" });
    }

  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: "error" });
  }
};