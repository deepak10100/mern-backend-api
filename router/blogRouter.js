
const express = require('express')
const { AddBlog, AllBlog, Blog, deleteBlog, editBlog } = require('../controller/blogController')
const upload = require('../middleware/upload')
const router = express.Router()

router.post('/addblog', upload.single('imagePath'), AddBlog)
router.put('/editblog/:id', upload.single('imagePath'), editBlog)
router.get('/allblog', AllBlog)
router.get('/blog/:id', Blog)
router.delete('/deleteblog/:id', deleteBlog)

module.exports = router
