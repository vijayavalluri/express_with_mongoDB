import post from "../schemas/postSchema.js"

export const createPost = (req, res) => {
    const{first_name, last_name, email} = req.body;
    try{
        console.log(req.body);}
        catch(err){
            console.log(err);
        }   
        post.create({first_name: first_name, last_name: last_name, email: email})
        .then(newPost => {
            res.status(200).send(newPost);
        })
        .catch(err => console.log(err))
    }



    export const getAllPosts = (req, res) => {
        post.find({})
        .then(results => {
            res.send(results)
   
    })
    .catch(err => {
        console});
    };


    export const editPost =  (req, res) => {
        // const {id}= req.params;
        const {first_name, last_name, email} = req.body;
        post.findByIdAndUpdate({first_name: first_name, last_name: last_name, email: email})  
        .then(results => {
            res.status(200).send(results)
        })
        .catch(err => {
            console.log(err);
        })
        // res.send("Vijaya edit the Post"+id)
    };
