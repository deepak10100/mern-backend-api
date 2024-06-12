const Blog = require("../models/blogModel")
const path = require('path')
module.exports.AddBlog = async (req, res)=>{
    try {
        let {title, desc} = req.body
        const imagePath = req.file ? req.file.path.replace('public', '') : undefined;
    let newBlog = await Blog.create({
        title,
        desc,
        imagePath
    })
    res.status(200).json({status:"success" , message: 'Create data Successfully',newBlog });   
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(400).json({ status:"failed", message: 'Create data Failed', error: error });
    }

}
module.exports.AllBlog = async (req, res)=>{
    try {
        let findBlog = await Blog.find()
    res.status(200).json( findBlog );   
    } catch (error) {
        console.error('All Data fetch Failed:', error);
        res.status(400).json({ status:"failed", message: 'All Data fetch Failed', });
    }
}
module.exports.Blog = async (req, res)=>{
    try {
    let blog = await Blog.findById(req.params.id)
    res.json( blog );   
    } catch (error) {
        console.error('Fatch data Failed blog:', error);
        res.status(400).json({ status:"failed", message: 'Fatch data Failed', });
    }
}
module.exports.deleteBlog = async (req, res)=>{
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"success", message:"delete blog Successfully"});   
        } catch (error) {
            console.error('Fatch data Failed blog:', error);
            res.status(400).json({ status:"failed", message: 'delete data Failed', });
        }
}
module.exports.editBlog = async (req, res)=>{
    try {
        let {title, desc} = req.body
        const imagePath = req.file ? req.file.path.replace('public', '') : undefined;
        let blog = await Blog.findByIdAndUpdate(req.params.id, {title, desc, imagePath})
        res.status(200).json({status:"success", message:"edit blog Successfully", blog});

        } catch (error) {
            console.error('Edit data Failed blog:', error);
            res.status(400).json({ status:"failed", message: 'Edit data Failed', });
        }
}