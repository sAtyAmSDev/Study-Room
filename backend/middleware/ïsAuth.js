import jwt from "jsonwebtoken"

export const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; 
        if (!token) {
          return res.status(400).json({
            message: "Token is Invalid",
            success: false,
          });
        }
    
        const decode = await jwt.verify(token, "StudyRoomJWT");
        req.token = decode; 
        next();
      } catch (error) {
        console.log(error.message);
        return res.status(401).json({
          message: "Authentication failed",
          success: false,
        });
      }
  };
  