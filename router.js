

//import express
const express = require('express')

//import userController
const userController = require('./controller/userController')

//import projectController
const ProjectController = require('./controller/projectController')

//import jwt middleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

//import multer
const multerConfig = require('./middleware/multerMiddleware')

//instance router
const router  = new express.Router()

//register
router.post('/register', userController.register)


//login
router.post('/login',userController.login)


//add-project
router.post('/add-project',jwtMiddleware,multerConfig.single("projectImage"),ProjectController.addProjectController)


//get all projects
router.get('/all-project',jwtMiddleware,ProjectController.getAllProjectsController)

//home project
router.get('/home-project',ProjectController.getHomeProjectsController)

//user projects
router.get('/user-project',jwtMiddleware,ProjectController.getUserProjectsController)

//remove user projects
router.delete('/remove-userproject/:id',jwtMiddleware,ProjectController.removeUserProjectController)

//update user project
router.put('/update-userproject/:id',jwtMiddleware,multerConfig.single('projectImage'),ProjectController.editProjectController)

//update user profile
router.put('/update-userprofile',jwtMiddleware,multerConfig.single("profile"),userController.editPRofileController)
module.exports = router
