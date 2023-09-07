const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
    const data = req.headers["authorization"];

    if (!data) {
        return res.status(401).send({ msg: "Authorization header missing" });
    }

    const token = data.split(" ")[1];

    try {
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        if (verify) {
            return next();
        }
    } catch (error) {
        return res.status(401).send({ msg: "User is not Authorized" });
    }
};

module.exports = authorization;