import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    pass: {
      type: String,
      required: true,
    },

    info: {},

    role: { type: [], default: 'basic' },

    users: [],

    companys: [{
      type: Schema.Types.ObjectId,
      ref: 'company'
    }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
};

userSchema.statics.comparePassword = async (pass, receivedPassword) => {
  return await bcrypt.compare(pass, receivedPassword)
}

export default model("user", userSchema);

// const UserSchema = mongoose.Schema({

//     grupo: {
//       type: String,
//       enum: ['futbolTotal', 'comodin', 'valeria'],
//       required: true
//       },

//     username:{
//         type:String,
//         unique:true,
//     },

//     email:{
//         type:String,
//         unique:true,
//         required:[true, "el campo email es requerido"],
//     },

//     ruc:{
//         type:String,
//         unique:true,
//     },

//     ci:{
//         type:String,
//         unique:true,
//     },

//     pass:{
//         type:String
//     },

//     position:{
//         type:String
//     },

//     age:{
//         type:Number
//     },

//     photoProfile:{
//         type:String
//     },

//     bio:{
//         type:String
//     },

//     friends:{
//         type:[],
//         default:[]
//     },

//     rols:{
//         type:[],
//         default:[]
//     }


// });

// const User = mongoose.model('user', UserSchema);

// module.exports  =  User;