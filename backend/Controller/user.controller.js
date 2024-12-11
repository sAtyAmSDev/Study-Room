import { Users } from "../model/user.model.js";
import jwt from "jsonwebtoken"
export const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    Users.create({ name, email, password })
    return res.status(200).json({ meassage: "User Created" });
  } catch (error) {
    console.log(error.meassage);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
        success: false,
      });
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist with this email.",
        success: false,
      });
    }

    const token = await jwt.sign({ email }, "StudyRoomJWT", {
      expiresIn: "1d",
    });




    return res
      .status(200).json({ message: "User Login", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }

}


export const UserProfile = async (req, res) => {
  try {
    const { email } = req.token;
    console.log(email);


    const user = await Users.findOne({ email }, {
      name: 1,
      email: 1,
    });
    if (!user) {
      return res.status(400).json({
        message: "User Invalid",
        success: false,
      });
    };

   

    // const UserName = user.name;
    // const UserEmail = email
    return res.status(200).json({
      message: "User Found",
      user
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
}