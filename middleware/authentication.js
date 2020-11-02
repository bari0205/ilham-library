const jwt = require("jsonwebtoken");
const jwtkey = "in1token";

exports.authenticated = (req, res, next) => {
  let header, token;

  //check if header present and with Bearer
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  ) {
    return res.status(400).send({
      error: {
        message: "Cannot Access",
      },
    });
  }

  //check token
  try {
    const verified = jwt.verify(token, jwtkey);

    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: {
        message: "Invalid Token",
      },
    });
  }
};
