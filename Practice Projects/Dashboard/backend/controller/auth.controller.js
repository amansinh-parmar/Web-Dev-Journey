import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password, profileImageUrl, adminJoinCode } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    name === "" ||
    email === "" ||
    password === " "
  ) {
    return res
      .status(400)
      .json({ message: "Sorry, All fields are must required..!!" });
  }

  // Check the user if does it already exists or not
  const isAlreadyExist = await User.findOne({ email });

  if (isAlreadyExist) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  //   Check user role

  let role = "user";

  if (adminJoinCode && adminJoinCode === process.env.ADMIN_JOIN_CODE) {
    role = "admin";
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashPassword,
    profileImageUrl,
    role
  });

  try{
    await newUser.save()

    res.json('Signup Successful')
  } catch(error){
    res.status(500).json({message: error.message})
  }
};
