import Role from "../models/Role";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "basic", description: "usuario basico" }).save(),
      new Role({ name: "admin", description: "todo lo puede lord" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });
  // get roles _id
  // const roles = await Role.find({ name: { $in: ["admin","test","user","moderator"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      name: "admin",
      email: "admin@localhost",
      companys: [],
      users: [],
      pass: await bcrypt.hash("admin", 10),
      role: ["admin"],
      // roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')

    await User.create({
      name: "basic",
      email: "basic@localhost",
      companys: [],
      users: [],
      pass: await bcrypt.hash("basic", 10),
      role: ["basic"],
      // roles: roles.map((role) => role._id),
    });
    console.log('basic User Created!')
  }
};