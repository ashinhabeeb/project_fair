const users = require('../model/userModel')
const jwt = require('jsonwebtoken')



//register
exports.register = async (req, res) => {


  const { username, email, password } = req.body
  console.log(username, email, password)
  // console.log('inside register function')

  try {
    const existingUser = await users.findOne({ email })
    if (existingUser) {
      res.status(406).json('user already exist')
    }
    else {
      const newUSer = new users({
        username,
        email,
        password,
        profile: "",
        github: "",
        linkedin: ""
      })
      await newUSer.save()
      res.status(200).json(newUSer)
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

//login

exports.login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)

  try {
    const existingUser = await users.findOne({ email, password })
    if (existingUser) {
      const token = jwt.sign({ userId: existingUser._id }, 'secretkey') //jsonweb token
      res.status(200).json({ existingUser, token })
    }
    else {
      res.status(406).json('incorrect email or password')
    }

  } catch (error) {
    res.status(401).json(error)
  }
}

//edit profile

exports.editPRofileController = async (req, res) => {
  const userId = req.payload
  const { username, email, password, profile, github, linkedin } = req.body

  uploadImg = req.file ? req.file.filename : profile

  try {
    const existingUser = await users.findByIdAndUpdate({ _id: userId }, {
      username,
      email,
      password,
      profile: uploadImg,
      github,
      linkedin
    }, { new: true })

    await existingUser.save()
    res.status(200).json(existingUser)
  } catch (error) {
    res.status(401).json(error)
  }
}