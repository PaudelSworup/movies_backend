const { addMinutes } = require("date-fns");
const Token = require("../../models/TokenModel");
const Users = require("../../models/UsersModel");
const sendEmail = require("../../utils/sendMail");
const crypto = require("crypto");
const generateToken = require("../../utils/generateToken");
const bcrypt = require("bcrypt")

exports.registerAccount = async (req, res) => {
  const hash_password = await bcrypt.hash(req.body.password, 10);
  try {
    let users = new Users({
      email: req.body.email.toLowerCase(),
      username: req.body.username,
      password: hash_password,
      deviceToken:req.body.deviceToken
    });

    users = await users.save();

    if (!users) {
      throw new Error("Something went wrong!");
    }

    let token = new Token({
      token: crypto.randomBytes(16).toString("hex"),
      userId: users._id,
      expiresIn: addMinutes(Date.now(), 1440),
    });
    token = await token.save();

    if (!token) {
      throw new Error("Something went wrong!");
    }

   const response =  sendEmail({
      from: "NETFLIX <netflix.mov.np>",
      to: users.email,
      subject: "User Registration",
      html: `  
      <h2>Account creation successful</h2>
      <h2>Hello <strong>${users.username}</strong>, <br/></h2> 
      <p style='font-size:20px;'>your account has been created.Activate your account to continue</p>
      <br>
      <p>your activation url is https://movies-backend-six.vercel.app/api/activation/${token.token}</p>
      <br/>
      <button style='padding:10px; background-color:dodgerblue; cursor:pointer; border:none; ouline:none'><span style='color:#fff; font-size:16px;'>Activate your account</span></button>
    `,
    })
    return res.status(200).json({
      success: true,
      message: "User account has been created, verify it to continue",
      response:`response ${response}`
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.activateAccount = async (req, res) => {
  let statusCode = 200;

  try {
    const token = await Token.findOne({ token: req.params.token });
    if (!token) {
      statusCode = 401;
      throw new Error("Invalid Token");
    }

    // check if token is expired or not
    if (token.expiresIn < Date.now()) {
      statusCode = 401;
      throw new Error(
        "Expired Token: You need to generate a new token to activate your account"
      );
    }

    // if token is valid then find the user for that token
    let user = await Users.findOne({ _id: token.userId });
    if (!user) {
      statusCode = 401;
      throw new Error("user not found");
    }

    if (user.isVerified) {
      statusCode = 400;
      throw new Error("Account is already activated");
    } else {
      user.isVerified = true;

      user = await user.save();
    }

    if (!user) {
      statusCode = 400;
      throw new Error("Something went wrong");
    }
    return res.status(statusCode).json({
      success: true,
      message: `Congrats ${user.username}, your email has been verified`,
    });
  } catch (err) {
    res.status(statusCode).json({ success: false, error: err.message });
  }
};

//resend activation token
exports.resendToken = async (req, res) => {
  let statusCode = 200;
  try {
    let email = await Users.findOne({ email: req.body.email.toLowerCase() });

    if (!email) {
      statusCode = 401;
      throw new Error("Email not registred");
    }

    if (email.isVerified) {
      statusCode = 400;
      throw new Error("Account is already activated");
    }

    let token = new Token({
      token: crypto.randomBytes(16).toString("hex"),
      userId: email._id,
      expiresIn: addMinutes(Date.now(), 20),
    });

    token = await token.save();

    if (!token) {
      statusCode = 400;
      throw new Error("Something went wrong");
    }

    // const emailVerificationUrl = `${process.env.CLIENT_SIDE}/confirmation/${token.token}`;
    sendEmail({
      from: "NETFLIX <netflix.mov.np>",
      to: email.email,
      subject: "Account Activation Token",
      html: `
      <div style='display:flex; flex-direction:column; justify-content:center; align-items:start'>
      <h2>Activation Token</h2>
      <h2>Hello <strong>${email.fullname}</strong>, <br/></h2> 
      <p style='font-size:20px;'>your account has been created.Activate your account to continue</p>
      <br>
      your activation url is https://movies-backend-six.vercel.app/api/activation/${token.token}
      <button style='padding:10px; background-color:dodgerblue; cursor:pointer; border:none; ouline:none'><span style='color:#fff; font-size:16px;'>Activate your account</span></button>
      </div>
    `,
    })
    return res.status(statusCode).send({
      success: true,
      message: "Activation link has been sent to your mail",
    });
  } catch (err) {
    res.status(statusCode).json({ success: false, error: err.message });
  }
};

exports.Login = async (req, res) => {
  const { password } = req.body;
  statusCode = 200;
  try {
    const user = await Users.findOne({ email: req.body.email.toLowerCase() });

    if (!user) {
      statusCode = 401;
      throw new Error("email not registred");
    }

    // if email found then check password for that email
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword === false) {
      statusCode=401
      return res
        .status(statusCode)
        .json({ success: false, error: "Wrong Credentials" });
    }

    // check if accont is verified
    if (!user.isVerified) {
      statusCode = 401;
      throw new Error("account is not activated");
    }

    // now generate jwt
    const token = generateToken(user._id);
    res.cookie("token", token, { expire: Date.now() + 99999 });

    const { _id,  email, username } = user;

    return res.status(statusCode).json({
      success: true,
      token,
      user: {
        _id,
        email,
        username,
      },
    });
  } catch (err) {
    return res.status(statusCode).json({ success: false, error: err.message });
  }
};
