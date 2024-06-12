const { default: mongoose } = require("mongoose");

let databaseConnect = ()=>{
    let url = 'mongodb+srv://admin:admin@cluster0.8jviear.mongodb.net/blogData?retryWrites=true&w=majority&appName=Cluster0'
    mongoose.connect(url)
    .then(() => console.log('Connected!'))
    .catch((err) => console.log("Database disconnect",err));

}
module.exports=databaseConnect