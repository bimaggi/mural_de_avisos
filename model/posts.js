module.exports = {
    posts: [
        {
            id: "00000",
            title:"Por fios de poesia",
            description: "Poesia"
        },
    ] ,
    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id:generateID(),title,description})
    },
}


function generateID(){
    return Math.random().toString(36).substr(2,9)
}