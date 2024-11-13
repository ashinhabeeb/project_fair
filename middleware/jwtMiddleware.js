
const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log('inside jwt middleware')
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token)

    try {
        jwtResopnse = jwt.verify(token, "secretkey")
        console.log(jwtResopnse)
        req.payload = jwtResopnse.userId
        next()
    } catch (error) {
        res.status(401).json('authorisation failed due to', error)
    }

}

module.exports = jwtMiddleware

